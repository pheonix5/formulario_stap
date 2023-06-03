import React from "react";

const OutrosProblemasForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="checkbox-group">
        <p>Marque caso alguns desses itens estejam com problema</p>
        <br/>

          <input 
            type="checkbox"
            value={data.farois}
            name="farois"
            onChange={(e) => updateFieldHandler("farois", e.target.value)}
            
          />
          <label>FAROIS</label><br/>

          <input 
            type="checkbox"
            value={data.lanternaTrazeira}
            name="lanternasTrazeiras"
            onChange={(e) => updateFieldHandler("lanternaTrazeiras", e.target.value)}
            
          />
          <label>LANTERNAS TRAZEIRAS</label><br/>

          <input 
            type="checkbox"
            value={data.luzRe}
            name="luzRe"
            onChange={(e) => updateFieldHandler("luzRe", e.target.value)}
            
          />
        <label>LUZ DE RÉ</label><br/>

          <input 
            type="checkbox"
            value={data.luzFreio}
            name="luzFreio"
            onChange={(e) => updateFieldHandler("luzFreio", e.target.value)}
            
          />
        <label>LUZ DE FREIO</label><br/>

          <input 
            type="checkbox"
            value={data.setas}
            name="setas"
            onChange={(e) => updateFieldHandler("setas", e.target.value)}
            
          />
        <label>SETAS</label><br/>

        <input 
            type="checkbox"
            value={data.retrovisores}
            name="retrovisores"
            onChange={(e) => updateFieldHandler("retrovisores", e.target.value)}
            
          />
        <label>RETROVISORES</label><br/>

        <input 
            type="checkbox"
            value={data.pneus}
            name="pneus"
            onChange={(e) => updateFieldHandler("pneus", e.target.value)}
            
          />
        <label>PNEUS</label><br/>

        <input 
            type="checkbox"
            value={data.avariasLateralBau}
            name="avariasLateralBau"
            onChange={(e) => updateFieldHandler("avariasLateralBau", e.target.value)}
            
          />
        <label>AVARIAS NA LATERAL E BAÚ</label><br/>

        <input 
            type="checkbox"
            value={data.ruidosBarulhos}
            name="ruidosBarulhos"
            onChange={(e) => updateFieldHandler("ruidosBarulhos", e.target.value)}
            
          />
        <label>RUIDOS OU BARULHOS ESTRANHOS</label><br/>
        
        
        
      </div>
    </div>
  );
}

export default OutrosProblemasForm;
