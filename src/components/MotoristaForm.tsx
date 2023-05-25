import React from "react";
import './MotoristaForm.css'

const MotoristaForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Motorista:</label>
        <select
          name="text"
          id="name"
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        >

          <option  value={data.motorista || "Lucas"}>Lucas Felix</option>
          <option  value={data.motorista || "Camila"}>Camila Vitoria</option>
          <option  value={data.motorista || "Amanda"}>Amanda Caroline</option>
          <option  value={data.motorista || "Ronara"}>Ronara Fernanda</option>
        </select>
      </div>

    </div>
  )
}

export default MotoristaForm;