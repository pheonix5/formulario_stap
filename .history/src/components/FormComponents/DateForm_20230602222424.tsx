import React, { useEffect, useState } from "react";
import './DateForm.css'

import { format, addDays } from "date-fns"; 
import './DateForm.css'

const DateForm = ({ data, updateFieldHandler }) => {
  const [dataMaxima, setDataMaxima] = useState("");

  useEffect(() => {
    function dataMax() {
      const dataAtual = addDays(new Date(), 1); // Adicione 1 dia usando a função addDays do date-fns

      const dataFormatada = format(dataAtual, "yyyy-MM-dd"); // Formate a data para "aaaa-mm-dd"
      setDataMaxima(dataFormatada);
    }

    dataMax();
  }, []);

  function formatarDataParaBanco(data) {
    return format(data, "dd/MM/yyyy"); // Formate a data para "dd/mm/aaaa"
  }

  function formatarDataParaInput(data) {
    return format(data, "yyyy-MM-dd"); // Formate a data para "aaaa-mm-dd"
  }

  return (
    <div>
      <div className="date">
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={formatarDataParaInput(new Date(data.date)) || ""}
          id="calendario"
          max={dataMaxima}
          onChange={(e) =>
            updateFieldHandler("date", formatarDataParaBanco(new Date(e.target.value)))
          }
          required
        ></input>
      </div>
    </div>
  );
}

export default DateForm;
