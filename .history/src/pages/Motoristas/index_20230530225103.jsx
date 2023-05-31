import React from "react";
import './motoristas.css'

import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'

import { db } from '../../services/firebaseConnection'
import { doc, addDoc } from 'firebase/firestore'

export default function Motoristas(){
  return(
    <div className="admin-container">
      <Header />

      
    </div>
  )
}