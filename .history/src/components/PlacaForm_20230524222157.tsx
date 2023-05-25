import React from "react";
import './MotoristaForm.css'

const PlacaForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Motorista:</label>
        <select
          name="text"
          id="name"
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        >

          <option  value={data.placa || ""}>Lucas Felix</option>
          <option  value={data.placa || ""}>Camila Vitoria</option>
          <option  value={data.placa || ""}>Amanda Caroline</option>
          <option  value={data.placa || ""}>Ronara Fernanda</option>
        </select>
      </div>

    </div>
  )
}

export default PlacaForm;