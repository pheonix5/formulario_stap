import React,{ useState, useEffect } from "react";
import '../Motoristas/motoristas.css'

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
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Cadastro de Motoristas</h2>
      </div>

      <form className="form"  onSubmit={handleRegisterMotorista}>
        <div className="inputs">
          <label>Nome:</label>
          
          <Input
          type='text'
          placeholder='Digite o nome...'
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          />
        </div>
        
        <div className="inputs">
          <label>CPF:</label>

          <Input
            type='text'
            placeholder='Ex: xxx.xxx.xxx-xx'
            value={cpf}
            onChange={ (e) => setCpf(e.target.value)}
          />
        </div>

        
          <label>TEL: 
            <Input
              type='text'
              placeholder='Ex: DDD xxxxx-xxxx'
              value={telefone}
              onChange={ (e) => setTelefone(e.target.value)}
            />
          </label>

          
        

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}