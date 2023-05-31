import React,{ useState, useEffect } from "react";
import '../Motoristas/motorista.css'
import { BsPersonFillAdd } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function AddMotorista(){
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

  async function handleDeleteMotorista(id){
    const docRef = doc(db, "motoristas", id);
    await deleteDoc(docRef)
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Cadastro de Motoristas</h2>
      </div>
    </div>
  )
}