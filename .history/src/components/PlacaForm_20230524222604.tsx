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
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        >

          <option  value={data.placa || ""}>JGV-5878</option>
          <option  value={data.placa || ""}>MKR-3654 Vitoria</option>
          <option  value={data.placa || ""}>JYV-2547</option>
          <option  value={data.placa || ""}>KJS-8961</option>
        </select>
      </div>

    </div>
  )
}

export default PlacaForm;