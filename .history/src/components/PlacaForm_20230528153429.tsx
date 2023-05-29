import React from "react";
import './MotoristaForm.css'

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

          <option  value="">Placas</option>
          
        </select>
      </div>

    </div>
  )
}

export default PlacaForm;