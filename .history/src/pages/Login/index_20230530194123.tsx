import React, { useState } from 'react'
import './login.css'

import { Logo } from '../../components/Logo'

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: { preventDefault: () => void; }){
    e.preventDefault();
    alert("teste")
  }

  return(
    <div className="login-container">
      <Logo/>

      <form action="" className="form">
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

        <button type='submit' onSubmit={handleLogin}>Acessar</button>
      </form>
    </div>
  )
}