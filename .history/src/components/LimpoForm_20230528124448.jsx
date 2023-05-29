import React from "react";
import './LimpoForm.css'

const LimpoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <h4>O VEÍCULO ESTÁ LIMPO?</h4>
        <div className="radio-row">
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='sim'
                name="limpo"
                checked={data.limpo === "sim"}
                onChange={(e) => updateFieldHandler("limpo", e.target.value)}
              />
              SIM
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="limpo"
                checked={data.crlv === "nao"}
                onChange={(e) => updateFieldHandler("limpo", e.target.value)}
              />
              NÃO
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LimpoForm;
