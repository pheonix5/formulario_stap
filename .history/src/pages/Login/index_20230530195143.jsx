import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { Logo } from '../../components/Logo'

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e){
    e.preventDefault()
    
    if(email === '' || password === ''){
      toast.warning("Preencha todos os campos !")
      return;
    }


  }

  return(
    <div className="login-container">
      <Logo/>

      <form className="form" onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Digite seu email...'
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
        />

        <input
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