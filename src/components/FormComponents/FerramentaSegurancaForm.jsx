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
                value='sim'
                name="triangulo"
                checked={data.triangulo === "sim"}
                onChange={(e) => updateFieldHandler("triangulo", e.target.value)}
                required
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="triangulo"
                checked={data.triangulo === "nao"}
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
                value='sim'
                name="estepe"
                checked={data.estepe === "sim"}
                onChange={(e) => updateFieldHandler("estepe", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="estepe"
                checked={data.estepe === "nao"}
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
                value='sim'
                name="chaveRoda"
                checked={data.chaveRodas === "sim"}
                onChange={(e) => updateFieldHandler("chaveRodas", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="chaveRodas"
                checked={data.chaveRodas === "nao"}
                onChange={(e) => updateFieldHandler("chaveRodas", e.target.value)}
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
                value='sim'
                name="macaco"
                checked={data.macaco === "sim"}
                onChange={(e) => updateFieldHandler("macaco", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="macaco"
                checked={data.macaco === "nao"}
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
