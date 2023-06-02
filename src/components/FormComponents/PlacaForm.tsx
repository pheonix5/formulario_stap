import React, { useState, useEffect } from "react";
import './MotoristaForm.css'

import { db } from '../../services/firebaseConnection'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

type Placas ={
  id: string;
  placa: String
}

const PlacaForm = ({ data, updateFieldHandler }) =>{
  const [listaPlaca, setListaPlaca] = useState<Placas[]>([]);

  useEffect(() => {
    
    const placaRef = collection(db, "veiculos")
    const queryRef = query(placaRef, orderBy("modelo", 'asc'))

    const unsub = onSnapshot(queryRef, (snapshot) =>{
      const lista: Placas[] = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          placa: doc.data().placa
        });
      })

      setListaPlaca(lista);
      console.log(lista);
      
      
    })
  }, [])

  return (
    <div>
      <div className="select">
        <label htmlFor="">Placa:</label>
        <select
          name="text"
          id="name"
          value={data.placa || ""}
          onChange={(e) => updateFieldHandler('placa', e.target.value)}
          required
        >

          <option  value="">Placas...</option>
          { listaPlaca.map((item, index) => (
            <option
              key={index}
              value={item.placa.toString()}
            >
              {item.placa}
            </option>
          ))}

        </select>
      </div>

    </div>
  )
}

export default PlacaForm;