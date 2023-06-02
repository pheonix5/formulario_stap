import React,{ useState, useEffect } from "react";
import '../Motoristas/motoristas.css'
import { toast } from 'react-toastify'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore'
import { Input } from "../../components/Input";

export default function AddMotorista(){
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleRegisterMotorista(e){
    e.preventDefault();

    if(nome === "" || cpf === "" || telefone === ""){
      toast.warn("Preencha todos os campos!!")
      return;
    }

    addDoc(collection(db, 'motoristas'), {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      created: new Date(),
    })
    .then(() => {
      setNome(''),
      setCpf(''),
      setTelefone('')
      toast.success('Motorista Cadastrado com sucesso!!')
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
        <h2>Cadastro de Motoristas</h2>
      </div>

      <form className="form"  onSubmit={handleRegisterMotorista}>

          <label>Nome: </label>
          <Input
          type='text'
          placeholder='Digite o nome'
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          />

          <label>CPF: </label>
          <Input
            type='text'
            placeholder='Ex: xxx.xxx.xxx-xx'
            value={cpf}
            onChange={ (e) => setCpf(e.target.value)}
          />

          <label>Telefone: </label>
          <Input
            type='text'
            placeholder='Ex: DDD xxxxx-xxxx'
            value={telefone}
            onChange={ (e) => setTelefone(e.target.value)}
          />
     
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}