import React,{ useState, useEffect } from "react";
import '../Motoristas/motoristas.css'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { Input } from "../../components/Input";

export default function AddMotorista(){
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [Telefone, setTelefone] = useState('');

  async function handleRegisterMotorista(){
   
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Cadastro de Motoristas</h2>
      </div>

      <form className="form" >

        <Input
        type='text'
        placeholder='Digite seu email...'
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
        />

        <Input
          type='password'
          placeholder='****'
          autoComplete='on'
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />

        <button type='submit'>Acessar</button>
      </form>
    </div>
  )
}