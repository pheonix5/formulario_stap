import React,{ useState, useEffect } from "react";
import '../Motoristas/motoristas.css'
import { toast } from 'react-toastify'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore'
import { Input } from "../../components/Input";

export default function AddVeiculo(){
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');

  async function handleRegisterVeiculo(e){
    e.preventDefault();

    if(modelo === "" || placa === "" || marca === ""){
      toast.warn("Preencha todos os campos!!")
      return;
    }

    addDoc(collection(db, 'veiculos'), {
      modelo: modelo,
      placa: placa,
      marca: marca,
      created: new Date(),
    })
    .then(() => {
      setModelo(''),
      setPlaca(''),
      setMarca('')
      toast.success('Veículo Cadastrado com sucesso!!')
    })
    .catch((error) => {
      console.log('Erro ao registrar: ' + error);
      toast.error("Erro ao cadastrar dados")
    })
    
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Cadastro de Veículo</h2>
      </div>

      <form className="form"  onSubmit={handleRegisterVeiculo}>
          
          <label>Modelo: </label>
          <Input
          type='text'
          placeholder='Ex: Bitruck'
          value={modelo}
          onChange={ (e) => setModelo(e.target.value) }
          />

          <label>Placa: </label>
          <Input
            type='text'
            placeholder='Ex: PAC-9999'
            value={placa}
            onChange={ (e) => setPlaca(e.target.value)}
          />
          <label>Marca:</label>
          <Input
            type='text'
            placeholder='Ex: Wolkswagen'
            value={marca}
            onChange={ (e) => setMarca(e.target.value)}
          />
     
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}