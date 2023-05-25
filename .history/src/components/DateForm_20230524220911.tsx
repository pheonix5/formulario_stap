import React from "react";
import './DateForm.css'

const DateForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
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

export default DateForm;