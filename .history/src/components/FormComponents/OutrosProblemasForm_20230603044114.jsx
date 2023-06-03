import React from "react";
import { Form } from "react-bootstrap";

const OutrosProblemasForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="checkbox-group">
        <strong>Marque caso alguns desses itens estejam com problema</strong>
        <br />

        <Form.Check
          type="checkbox"
          id="farois"
          label="FAROIS"
          checked={data.farois}
          onChange={(e) => updateFieldHandler("farois", e.target.checked)}
        />

        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.value)}
        />
        
        <Form.Check
          type="checkbox"
          id="luzRe"
          label="LUZ DE RÉ"
          checked={data.luzRe}
          onChange={(e) => updateFieldHandler("luzRe", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="luzFreio"
          label="LUZ DE FREIO"
          checked={data.luzFreio}
          onChange={(e) => updateFieldHandler("luzFreio", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="setas"
          label="SETAS"
          checked={data.setas}
          onChange={(e) => updateFieldHandler("setas", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="retrovisores"
          label="RETROVISORES"
          checked={data.retrovisores}
          onChange={(e) => updateFieldHandler("retrovisores", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="pneus"
          label="PNEUS"
          checked={data.pneus}
          onChange={(e) => updateFieldHandler("pneus", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="avariasLateralBau"
          label="AVARIAS NA LATERAL E BAÚ"
          checked={data.avariasLateralBau}
          onChange={(e) => updateFieldHandler("avariasLateralBau", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="ruidosBarulhos"
          label="RUÍDOS OU BARULHOS ESTRANHOS"
          checked={data.ruidosBarulhos}
          onChange={(e) => updateFieldHandler("ruidosBarulhos", e.target.value)}
        />
      </div>
    </div>
  );
};

export default OutrosProblemasForm;
