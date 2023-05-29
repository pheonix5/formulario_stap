import React, { useState, useEffect } from "react";
import './MotoristaForm.css'


const MotoristaForm = ({ data, updateFieldHandler, motorista}) =>{
  const [nome, setNome] = useState(motorista[0]);

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

          <option value={nome} disabled>{nome}</option> 
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