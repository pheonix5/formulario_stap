import React from "react";
import './DateForm.css'

const PlacaForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="date">
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={data.date || ""}
          onChange={(e) => updateFieldHandler('date', e.target.value)}
        >
        
        </input>
      </div>

    </div>
  )
}

export default PlacaForm;