import React, { useState, useEffect } from "react";
import "./veiculos.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { Table, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";

import { db } from '../../services/firebaseConnection'

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const veiculosRef = collection(db, "veiculos");
    const queryRef = query(veiculosRef, orderBy("modelo", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          modelo: doc.data().modelo,
          placa: doc.data().placa,
          marca: doc.data().marca,
        });
      });

      setVeiculos(lista);
    });

    return () => unsub(); // Cleanup function to unsubscribe from the snapshot listener
  }, []);

  async function handleDeleteVeiculo(id) {
    const docRef = doc(db, "veiculos", id);
    await deleteDoc(docRef);
  }

  return (
    <div className="admin-container">
      <Header />

      <div className="table-actions">
        <h2>Veículos</h2>

        <Link className="link-add" to={"/addVeiculo"}>
          <BsPersonFillAdd size={28} color="#121212" />
        </Link>
      </div>

     <div className="listagem">
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((item, index) => (
              <tr key={index}>
                <td>{item.modelo}</td>
                <td>{item.placa}</td>
                <td>{item.marca}</td>
                <td><Button variant="outline-danger" onClick={() => handleDeleteVeiculo(item.id)}>Excluir</Button></td>
              </tr>
            ))}
          </tbody>
      </Table>
     </div>
    </div>
  );
}
