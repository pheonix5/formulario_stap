import React from "react";

const ManifestoObservacaoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label>PNEUS</label>
        </div>

        <div className="yesOrNot">
          <p>SIM</p>
          <p>NÃO</p>
        </div>

        <div className="radio-row">
          <div className="label">CALIBRADOS</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='sim'
                name="calibrado"
                checked={data.pneuCalibrado === "sim"}
                onChange={(e) => updateFieldHandler("pneuCalibrado", e.target.value)}
                required
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="calibrado"
                checked={data.pneuCalibrado === "nao"}
                onChange={(e) => updateFieldHandler("pneuCalibrado", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">EM BOM ESTADO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='sim'
                name="bomestado"
                checked={data.pneuBomEstado === "sim"}
                onChange={(e) => updateFieldHandler("pneuBomEstado", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="mauestado"
                checked={data.pneuBomEstado === "nao"}
                onChange={(e) => updateFieldHandler("pneuBomEstado", e.target.value)}
              />
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ManifestoObservacaoForm;
