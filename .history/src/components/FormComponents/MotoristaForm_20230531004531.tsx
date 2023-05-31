import React, { useState, useEffect } from "react";
import './MotoristaForm.css'

import { db } from '../../services/firebaseConnection'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'


type Motorista ={
  id: string;
  nome: String
}

const MotoristaForm = ({ data, updateFieldHandler}) =>{
  const [listaMotorista, setListaMototista] = useState<Motorista[]>([]);

  useEffect(() => {
    
    const motoristaRef = collection(db, "motoristas")
    const queryRef = query(motoristaRef, orderBy("nome", 'asc'))

    const unsub = onSnapshot(queryRef, (snapshot) =>{
      const lista: Motorista[] = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome
        });
      })

      setListaMototista(lista);
      
    })
  }, [])

  return (
    <div>
      <div className="select">
        <label htmlFor="">Motorista:</label>
        <select
          name="motorista"
          id="motorista"
          value={data.motorista}
          onChange={(e) => updateFieldHandler('motorista', e.target.value)}
          required
        >

          <option value="">Motoristas...</option>
          { listaMotorista.map((item, index) => (
            <option 
              key={index} 
              value={item.nome.toString()}
              >
                {item.nome}
            </option>
          )) }
        </select>
      </div>

    </div>
  )
}

export default MotoristaForm;