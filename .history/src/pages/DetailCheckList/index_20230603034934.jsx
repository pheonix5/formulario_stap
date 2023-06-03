import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection'

import './detailchecklist.css'

const DetailCheckList = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      
        const docRef = doc(db, 'formularios', itemId)
        console.log(doc);
      
    };

    fetchItemDetails();
  }, [itemId]);

  if (!itemDetails) {
    return <div className="container"><h1>Carregando detalhes do item...</h1></div>;
  }

  // Renderizar os detalhes do item
  return (
    <div className="container">
      <h2>Detalhes do CheckList</h2>
      
    </div>
  );
};

export default DetailCheckList;
