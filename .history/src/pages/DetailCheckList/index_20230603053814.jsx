import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection'

import html2pdf from "html2pdf.js";

import { Header } from '../../components/Header'

import './detailchecklist.css'
import { Button } from "react-bootstrap";

const DetailCheckList = () => {
  const contentRef = useRef();
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

  function handleExportPDF(){
    const contentElement = contentRef.current;

    if (contentElement) {
      const opt = {
        filename: "checklist.pdf",
        margin: [10, 10, 10, 10],
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      html2pdf().set(opt).from(contentElement).save();
    }
  };

  if (!itemDetails) {
    return <div className="container"><h1>Carregando detalhes do item...</h1></div>;
  }

  return (
    
    <div className="container">
      <Header/>
      <Button className="download" variant="success" onClick={handleExportPDF}>Baixar-PDF</Button>
      <div className="content" ref={contentRef}>
        <h2>Detalhes do Check List </h2>

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
            <h4>PNEUS:</h4>
            <ul>
              <li>CALIBRADOS	: {itemDetails.pneuCalibrado}</li>
              <li>EM BOM ESTADO	: {itemDetails.pneuBomEstado}</li>
            </ul>
            {itemDetails.manifesto && (
              <div>
                <h3>Número do Manifesto:</h3>
                <p>{itemDetails.manifesto}</p>
              </div>
            )}
            {itemDetails.observacao && (
            <div>
              <h3>Observacão:</h3>
              <p>{itemDetails.observacao}</p>
            </div>
          )}
          </div>

          <div>
            <h4>Véiculo Limpo?:</h4>
            <ul>
              <li>LIMPO	: {itemDetails.limpo}</li>
            </ul>
          </div>

          { (itemDetails.farois 
            || itemDetails.lanternaTrazeira 
            || itemDetails.luzRe 
            || itemDetails.luzFreio 
            || itemDetails.setas
            || itemDetails.retrovisores
            || itemDetails.pneus
            || itemDetails.avariasLateralBau
            || itemDetails.ruidosBarulhos) && (
            <div>
              <h4>Outros Problemas:</h4>
              <ul>
                <li>Farois: {itemDetails.farois === true ? 'sim' : 'não'}</li>
                <li>Lanterna Trazeira: {itemDetails.lanternaTrazeira === true ? 'sim' : 'não'}</li>
                <li>Luz de Ré: {itemDetails.luzRe === true ? 'sim' : 'não'}</li>
                <li>Luz de Freio: {itemDetails.luzFreio === true ? 'sim' : 'não'}</li>
                <li>Setas: {itemDetails.setas === true ? 'sim' : 'não'}</li>
                <li>Retrovisores: {itemDetails.retrovisores === true ? 'sim' : 'não'}</li>
                <li>Avarias na Lateral ou Baú: {itemDetails.avariasLateralBau === true ? 'sim' : 'não'}</li>
                <li>Ruídos e Barulhos: {itemDetails.ruidosBarulhos === true ? 'sim' : 'não'}</li>
              </ul>
            </div>
          )} 


          

        </div>
      </div>
      
    </div>
  );
};

export default DetailCheckList;
