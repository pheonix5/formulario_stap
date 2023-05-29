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
        >

          <option  value="JGV-5878">JGV-5878</option>
          <option  value="MKR-3654">MKR-3654</option>
          <option  value="JYV-2547">JYV-2547</option>
          <option  value="KJS-8961">KJS-8961</option>
        </select>
      </div>

    </div>
  )
}

export default PlacaForm;