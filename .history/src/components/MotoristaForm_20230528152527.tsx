import React, { useState, useEffect } from "react";
import './MotoristaForm.css'


const MotoristaForm = ({ data, updateFieldHandler, motorista}) =>{

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