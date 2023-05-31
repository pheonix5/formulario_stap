import React,{ useState, useEffect } from "react";
import './motoristas.css'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, addDoc, Firestore, collection, query, orderBy } from 'firebase/firestore'

export default function Motoristas(){
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    const motoristasRef = collection(db, 'motoristas');
    const queryRef = query(motoristasRef, orderBy('nome', 'asc'))
  }, [])

  return(
    <div className="admin-container">
      <Header />

      
    </div>
  )
}