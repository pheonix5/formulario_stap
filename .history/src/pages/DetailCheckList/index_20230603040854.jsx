import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection'

import { Header } from '../../components/Header'

import './detailchecklist.css'

const DetailCheckList = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const docRef = doc(db, 'formularios', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setItemDetails(snapshot.data());
        } else {
          console.log("Item não encontrado");
        }
      } catch (error) {
        console.log("Erro ao buscar dados: " + error);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (!itemDetails) {
    return <div className="container"><h1>Carregando detalhes do item...</h1></div>;
  }

  return (
    <div className="container">
      <Header/>
      <h2>Detalhes do Check List</h2>
      <div className="detail-list">
        <div>
          <h3>Motorista:</h3>
          <p>{itemDetails.motorista}</p>
        </div>
        <div>
          <h3>Placa:</h3>
          <p>{itemDetails.placa}</p>
        </div>
        <div>
          <h3>Data:</h3>
          <p>{itemDetails.date}</p>
        </div>
        <div>
          <h3>Itens:</h3>
          <ul>
            <li>Farois: {itemDetails.farois}</li>
            <li>Lanternas traseiras: {itemDetails.lanternaTrazeira}</li>
            <li>Luz de ré: {itemDetails.luzRe}</li>
            {/* Adicione mais itens aqui */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailCheckList;
