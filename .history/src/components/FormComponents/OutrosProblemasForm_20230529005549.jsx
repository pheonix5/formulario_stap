import React from "react";

const OutrosProblemasForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="checkbox-group">
        <div className="titulo">
          <label>MARQUE CASO ALGUNS DESSES ITENS ESTEJAM COM PROBLEMA</label>
        </div>
        <br/>

          <input 
            type="checkbox"
            value={data.farois}
            name="farois"
            onChange={(e) => updateFieldHandler("farois", e.target.value)}
            required
          />
          <label>FAROIS</label><br/>

          <input 
            type="checkbox"
            value={data.lanternaTrazeira}
            name="lanternasTrazeiras"
            onChange={(e) => updateFieldHandler("lanternaTrazeiras", e.target.value)}
            required
          />
          <label>LANTERNAS TRAZEIRAS</label><br/>

          <input 
            type="checkbox"
            value={data.luzRe}
            name="luzRe"
            onChange={(e) => updateFieldHandler("luzRe", e.target.value)}
            required
          />
        <label>LUZ DE RÉ</label><br/>

          <input 
            type="checkbox"
            value={data.luzFreio}
            name="luzFreio"
            onChange={(e) => updateFieldHandler("luzFreio", e.target.value)}
            required
          />
        <label>LUZ DE RÉ</label><br/>
        
        
        
      </div>
    </div>
  );
}

export default OutrosProblemasForm;
