import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

const DetailCheckList = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const itemRef = doc(db, 'formularios', itemId);
        const itemSnapshot = await getDoc(itemRef);
        if (itemSnapshot.exists()) {
          setItemDetails(itemSnapshot.data());
        } else {
          // Item não encontrado
        }
      } catch (error) {
        // Tratar erros
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (!itemDetails) {
    return <div>Carregando detalhes do item...</div>;
  }

  // Renderizar os detalhes do item
  return (
    <div>
      <h2>Detalhes do CheckList</h2>
      {/* Renderizar os detalhes aqui */}
    </div>
  );
};

export default DetailCheckList;
