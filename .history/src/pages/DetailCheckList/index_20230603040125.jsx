import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection'

import './detailchecklist.css'

const DetailCheckList = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const docRef = doc(db, 'formularios', itemId);
        const snapshot = await getDoc(docRef);
        setItemDetails(snapshot.data());
      } catch (error) {
        console.log("Erro ao buscar dados: " + error);
      }
    };
    
    fetchItemDetails();
    console.log(itemDetails);
  }, [id]);

  if (!itemDetails) {
    return <div className="container"><h1>Carregando detalhes do item...</h1></div>;
  }

  // Renderizar os detalhes do item
  return (
    <div className="container">
      <h2>{itemDetails.motorista}</h2>
      
    </div>
  );
};

export default DetailCheckList;
