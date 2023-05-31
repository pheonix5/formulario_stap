import React,{ useState, useEffect } from "react";
import '../Motoristas/motoristas.css'
import { toast } from 'react-toastify'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
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
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Cadastro de Motoristas</h2>
      </div>

      <form className="form"  onSubmit={handleRegisterMotorista}>
    
          <Input
          type='text'
          placeholder='Nome: digite o nome'
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          />

          <Input
            type='text'
            placeholder='CPF: Ex: xxx.xxx.xxx-xx'
            value={cpf}
            onChange={ (e) => setCpf(e.target.value)}
          />

          <Input
            type='text'
            placeholder='TEL: Ex: DDD xxxxx-xxxx'
            value={telefone}
            onChange={ (e) => setTelefone(e.target.value)}
          />
     
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}