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
      <Header />
      <div className="content">
        <h2>Detalhes do Check List</h2>

        <div className="detail-list">

          <div>
            <h3>Motorista:</h3>
            <p>{itemDetails.motorista}</p>
          </div>

          <div>
            <h3>Data:</h3>
            <p>{itemDetails.date.split('-').reverse().join('/')}</p>
          </div>

          <div>
            <h3>Placa:</h3>
            <p>{itemDetails.placa}</p>
          </div>

          <div>
            <h3>Documentação:</h3>
            <ul>
              <li>CRLV: {itemDetails.crlv}</li>
              <li>ANTT: {itemDetails.antt}</li>
              <li>DEDETIZAÇÃO: {itemDetails.dedetizacao}</li>
              <li>CVV: {itemDetails.cvv}</li>
              <li>TACÓGRAFO: {itemDetails.tacografo}</li>
              {/* Adicione mais itens aqui */}
            </ul>
          </div>

          <div>
            <h4>Ferramentas de Segurança:</h4>
            <ul>
              <li>TRIANGULO: {itemDetails.triangulo}</li>
              <li>ESTEPE: {itemDetails.estepe}</li>
              <li>CHAVE DE RODAS	: {itemDetails.chaveRodas}</li>
              <li>MACACO: {itemDetails.macaco}</li>
              {/* Adicione mais itens aqui */}
            </ul>
          </div>

          <div>
            <h4>Motor e Combustível:</h4>
            <ul>
              <li>NÍVEL DE ÁGUA	: {itemDetails.nivelAgua}</li>
              <li>NÍVEL DE ÓLEO	: {itemDetails.nivelOleo}</li>
              <li>NÍVEL DE ARLA	: {itemDetails.nivelArla}</li>
              {/* Adicione mais itens aqui */}
            </ul>
          </div>

          <div>
            <h4>Pneus:</h4>
            <ul>
              <li>Calibrados	: {itemDetails.pneuCalibrado}</li>
              <li>Em bom estado	: {itemDetails.pneuBomEstado}</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DetailCheckList;
