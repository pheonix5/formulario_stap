import React from "react";
import './Userform.css'

const DateForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Data:</label>
        <input
          type="data"
          value={data.date || ""}
          onChange={(e) => updateFieldHandler('date', e.target.value)}
        >
        
        </input>
      </div>

    </div>
  )
}

export default DateForm;