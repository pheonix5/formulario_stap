import React, { useEffect, useState } from "react";
import './DateForm.css'

const DateForm = ({ data, updateFieldHandler }) =>{
  const [dataMaxima, setDataMaxima] = useState("");


    function dataMax(){
      let dataAtual = new Date();
      let dia = dataAtual.getDate();
      let mes = dataAtual.getMonth() + 1;
      let ano = dataAtual.getFullYear();
      let dataFormatada = `${ano}-${mes}-${dia}`;
      return dataFormatada;
      setDataMaxima(dataFormatada)
    }
  
  return (
    <div>
      <div className="date">
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={data.date || ""}
          max='2023-05-28'
          onChange={(e) => updateFieldHandler('date', e.target.value)}
          required
        >
        
        </input>
      </div>

    </div>
  )
}

export default DateForm;