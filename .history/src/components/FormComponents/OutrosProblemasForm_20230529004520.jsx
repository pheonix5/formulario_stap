import React from "react";
import './OutrosProblemasForm.css'

const OutrosProblemasForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="checkbox-group">
        <div className="titulo">
          <label>MARQUE CASO ALGUNS DESSES ITENS ESTEJAM COM PROBLEMA</label>
        </div>
        <br/>

        <div className="inputs">
          <input 
            type="checkbox"
            value="outros"
            name={data.outros}
            onChange={(e) => updateFieldHandler("outros", e.target.value)}
            required
          />
          <label>FAROIS</label><br/>

          <input 
            type="checkbox"
            value="outros"
            name={data.outros}
            onChange={(e) => updateFieldHandler("outros", e.target.value)}
            required
          />
          <label>LANTERNAS TRAZEIRAS</label><br/>

          <input 
            type="checkbox"
            value="outros"
            name={data.outros}
            onChange={(e) => updateFieldHandler("outros", e.target.value)}
            required
          />
        <label>LUZ DE RÉ</label><br/>
        </div>
        
        
      </div>
    </div>
  );
}

export default OutrosProblemasForm;
