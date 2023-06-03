import React,{ useState, useEffect } from "react";
import './motoristas.css'
import { BsPersonFillAdd } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { Table, Button } from 'react-bootstrap'

import { Header } from '../../components/Header'

import { Header } from '../../components/Header'

import { db } from '../../services/firebaseConnection'
import { doc, deleteDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'

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

  async function handleDeleteMotorista(id){
    const docRef = doc(db, "motoristas", id);
    await deleteDoc(docRef)
  }

  return(
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Motoristas</h2>
        
        <Link className="link-add" to={"/addMotorista"}>
          <BsPersonFillAdd size={28} color="#121212"/>
        </Link>
      </div>

    <div className="listagem animated-pop">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          { motoristas.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.telefone}</td>
              <td><Button variant="outline-danger" onClick={() => handleDeleteMotorista(item.id)}>Excluir</Button></td>
            </tr>
          )) }
        </tbody>
      </Table>
    </div>
      
    </div>
  )
}