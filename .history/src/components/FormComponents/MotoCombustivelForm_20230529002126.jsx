import React from "react";
import './DocumentoForm.css'

const MotorCombustivelForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label>MOTOR E COMBUSTÍVEL</label>
        </div>

        <div className="yesOrNot">
          <p>SIM</p>
          <p>NÃO</p>
        </div>

        <div className="radio-row">
          <div className="label">NÍVEL DE ÁGUA</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='sim'
                name="nivelagua"
                checked={data.nivelAgua === "sim"}
                onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
                required
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="nivelagua"
                checked={data.nivelAgua === "nao"}
                onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">NÍVEL DE ÓLEO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='sim'
                name="niveloleo"
                checked={data.nivelOleo === "sim"}
                onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="niveloleo"
                checked={data.nivelOleo === "nao"}
                onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
              />
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MotorCombustivelForm;
