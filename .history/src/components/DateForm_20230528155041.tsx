import React, { useEffect, useState } from "react";
import './DateForm.css'

const DateForm = ({ data, updateFieldHandler }) =>{
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    function dataMax(){
      const dataAtual = new Date();
      setDia = dataAtual.getDate;

    }
  }, [])
  
  return (
    <div>
      <div className="date">
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={data.date || ""}
          id="calendario"
          onChange={(e) => updateFieldHandler('date', e.target.value)}
          required
        >
        
        </input>
      </div>

    </div>
  )
}

export default DateForm;