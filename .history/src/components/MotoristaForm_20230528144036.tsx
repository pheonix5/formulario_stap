import React, { useState, useEffect } from "react";
import './MotoristaForm.css'

type Motorista ={
  id: string;
  nome: String
}

import { db } from '../services/firebaseConnection'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

const MotoristaForm = ({ data, updateFieldHandler }) =>{
  const [listaMotorista, setListaMototista] = useState<Motorista[]>([]);

  useEffect(() => {
    
    const motoristaRef = collection(db, "motorista")
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
          value={data.motorista || listaMotorista[0]}
          onChange={(e) => updateFieldHandler('motorista', e.target.value)}
        >

          { listaMotorista.map((item, index) => (
            <option 
              key={index} 
              defaultValue={item.nome.toString()}
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