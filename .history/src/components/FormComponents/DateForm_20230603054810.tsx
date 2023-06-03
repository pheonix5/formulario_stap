import React, { useEffect, useState } from "react";
import './DateForm.css'

import { format, addDays } from "date-fns"; 

const DateForm = ({ data, updateFieldHandler }) => {
  const [dataMaxima, setDataMaxima] = useState("");

  useEffect(() => {
    function dataMax() {
      const dataAtual = addDays(new Date(), -0); 

      const dataFormatada = format(dataAtual, "yyyy-MM-dd");
      setDataMaxima(dataFormatada);
    }

    dataMax();
  }, []);

  
  return (
    <div>
      <div className="date">
        <label htmlFor="">Data:</label>
        <input
          type="date"
          value={(data.date) || ""}
          id="calendario"
          max={dataMaxima}
          onChange={(e) =>
            updateFieldHandler("date", (e.target.value))
          }
          required
        ></input>
      </div>
    </div>
  );
}

export default DateForm;
