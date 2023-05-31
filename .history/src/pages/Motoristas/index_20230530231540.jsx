import React,{ useState, useEffect } from "react";
import './motoristas.css'
import { BsPersonFillAdd } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function Motoristas(){
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    const motoristasRef = collection(db, 'motoristas');
    const queryRef = query(motoristasRef, orderBy('nome', 'asc'))

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = []

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          cpf: doc.data().cpf,
          telefone: doc.data().telefone
        })
      })

      console.log(lista);

    })

  }, [])

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Motoristas</h2>
        
        <Link>
          <BsPersonFillAdd size={28} color="#121212"/>
        </Link>
      </div>
    </div>
  )
}