import React,{ useState, useEffect } from "react";
import './motoristas.css'
import { BsPersonFillAdd } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'
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

      setMotoristas(lista);

    })
  }, [])

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Motoristas</h2>
        
        <Link className="link-add">
          <BsPersonFillAdd size={28} color="#121212"/>
        </Link>
      </div>

      { motoristas.map((item, index) => (
        <article
          className="list motoristas"
          style={{ backgroundColor: "#FFF", color: "#121212" }}
        >
        
          <p>{item.nome}</p>
          <p>{item.cpf}</p>
          <p>{item.telefone}</p>
          <div className="btn-delete">

          </div>

        </article>
      )) }
    </div>
  )
}