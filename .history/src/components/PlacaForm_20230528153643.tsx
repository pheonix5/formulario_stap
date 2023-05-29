import React from "react";
import './MotoristaForm.css'

import { db } from '../services/firebaseConnection'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

type Placa ={
  id: string;
  numero: String
}

const PlacaForm = ({ data, updateFieldHandler }) =>{
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

        </select>
      </div>

    </div>
  )
}

export default PlacaForm;