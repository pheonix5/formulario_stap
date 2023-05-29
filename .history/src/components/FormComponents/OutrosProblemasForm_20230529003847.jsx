import React from "react";


const OutrosProblemasForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="checkbox-group">
        <div className="titulo">
          <label>MARQUE CASO ALGUNS DESSES ITENS ESTEJAM COM PROBLEMA</label>
        </div>

        <input 
          type="checkbox"
          value="outros"
          name={data.outros}
          onChange={(e) => updateFieldHandler("outros", e.target.value)}
          required
        />
        <label>FAROIS</label>
        
      </div>
    </div>
  );
}

export default OutrosProblemasForm;
