import React from "react";
import './DocumentoForm.css'

const PneusForm = ({ data, updateFieldHandler }) => {
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
                value='triangulo-nao'
                name="triangulo"
                checked={data.triangulo === "triangulo-nao"}
                onChange={(e) => updateFieldHandler("triangulo", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">ESTEPE</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='estepe-sim'
                name="estepe"
                checked={data.estepe === "estepe-sim"}
                onChange={(e) => updateFieldHandler("estepe", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='estepe-nao'
                name="estepe"
                checked={data.estepe === "estepe-nao"}
                onChange={(e) => updateFieldHandler("estepe", e.target.value)}
              />
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PneusForm;
