import React from "react";
import './DocumentoForm.css'

const FerramentaSegurancaForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label>FERRAMENTAS DE SEGURANÇA </label>
        </div>

        <div className="yesOrNot">
          <p>SIM</p>
          <p>NÃO</p>
        </div>

        <div className="radio-row">
          <div className="label">TRIANGULO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='triangulo-sim'
                name="triangulo"
                checked={data.triangulo === "triangulo-sim"}
                onChange={(e) => updateFieldHandler("triangulo", e.target.value)}
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

        <div className="radio-row">
          <div className="label">CHAVE DE RODAS</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='chaveRoda-sim'
                name="chaveRoda"
                checked={data.chaveRodas === "chaveRoda-sim"}
                onChange={(e) => updateFieldHandler("chaveRodas", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='chaveRoda-nao'
                name="chaveRoda"
                checked={data.chaveRoda === "chaveRoda-nao"}
                onChange={(e) => updateFieldHandler("chaveRoda", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">MACACO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='macaco-sim'
                name="macaco"
                checked={data.macaco === "macaco-sim"}
                onChange={(e) => updateFieldHandler("macaco", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='macaco-nao'
                name="macaco"
                checked={data.macaco === "macaco-nao"}
                onChange={(e) => updateFieldHandler("macaco", e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FerramentaSegurancaForm;
