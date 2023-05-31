import React,{ useState, useEffect } from "react";
import './motoristas.css'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, addDoc } from 'firebase/firestore'

export default function Motoristas(){
  const [motoristas, setMotoristas] = useState([]);

  return(
    <div className="admin-container">
      <Header />

      
    </div>
  )
}