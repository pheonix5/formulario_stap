import React, { useState, useEffect } from "react";
import './MotoristaForm.css'


const MotoristaForm = ({ data, updateFieldHandler, motorista}) =>{
  const { nome } = motorista[0];

  return (
    <div>
      <div className="select">
        <label htmlFor="">Motorista:</label>
        <select
          name="motorista"
          id="motorista"
          value={data.motorista}
          defaultValue={nome}
          onChange={(e) => updateFieldHandler('motorista', e.target.value)}
        >

          { motorista.map((item, index) => (
            <option 
              key={index} 
              value={item.nome}
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