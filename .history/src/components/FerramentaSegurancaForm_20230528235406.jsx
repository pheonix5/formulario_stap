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
                checked={data.chaveRoda === "chaveRoda-sim"}
                onChange={(e) => updateFieldHandler("chaveRoda", e.target.value)}
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
          <div className="label">CVV</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='cvv-sim'
                name="cvv"
                checked={data.cvv === "cvv-sim"}
                onChange={(e) => updateFieldHandler("cvv", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='cvv-nao'
                name="cvv"
                checked={data.cvv === "cvv-nao"}
                onChange={(e) => updateFieldHandler("cvv", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">TACÓGRAFO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='tacografo-sim'
                name="tacografo"
                checked={data.tacografo === "tacografo-sim"}
                onChange={(e) => updateFieldHandler("tacografo", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='tacografo-nao'
                name="tacografo"
                checked={data.tacografo === "tacografo-nao"}
                onChange={(e) => updateFieldHandler("tacografo", e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FerramentaSegurancaForm;