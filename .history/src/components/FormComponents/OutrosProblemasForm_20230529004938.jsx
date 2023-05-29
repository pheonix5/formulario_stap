import React from "react";

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
            value="farois"
            name="outros"
            onChange={(e) => updateFieldHandler("outros", e.target.value)}
            required
          />
          <label>FAROIS</label><br/>

          <input 
            type="checkbox"
            value="Lanterna Trazeiras"
            name="Lanterna Trazeiras"
            onChange={(e) => updateFieldHandler("outros", e.target.value)}
            required
          />
          <label>LUZ DE RÉ</label><br/>

          <input 
            type="checkbox"
            value="LUZ DE RE"
            name="LUZ DE RE"
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
