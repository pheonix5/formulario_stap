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
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LUZ DE RÉ"
          checked={data.luzRe}
          onChange={(e) => updateFieldHandler("luzRe", e.target.value)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          id="lanternasTrazeiras"
          label="LANTERNAS TRAZEIRAS"
          checked={data.lanternaTrazeira}
          onChange={(e) => updateFieldHandler("lanternaTrazeira", e.target.checked)}
        />

        

      </div>
    </div>
  );
};

export default OutrosProblemasForm;
