import React, { useEffect, useState } from "react";
import './DateForm.css'

import { format, addDays } from "date-fns"; // Importe a função format e addDays do date-fns
import './DateForm.css'

const DateForm = ({ data, updateFieldHandler }) => {
  const [dataMaxima, setDataMaxima] = useState("");

  useEffect(() => {
    function dataMax() {
      const dataAtual = new Date();
      dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia para garantir que a data máxima seja correta

      const dia = dataAtual.getDate().toString().padStart(2, "0");
      const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
      const ano = dataAtual.getFullYear();

      const dataFormatada = `${ano}-${mes}-${dia}`;
      setDataMaxima(dataFormatada);
    }

    dataMax();
  }, []);

  function formatarDataParaBanco(data) {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function formatarDataParaInput(data) {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`;
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
