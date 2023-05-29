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
                value='crlv-sim'
                name="crlv"
                checked={data.crlv === "crlv-sim"}
                onChange={(e) => updateFieldHandler("crlv", e.target.value)}
              />
              Sim
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='crlv-nao'
                name="crlv"
                checked={data.crlv === "crlv-nao"}
                onChange={(e) => updateFieldHandler("crlv", e.target.value)}
              />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LimpoForm;
