import React from "react";
import './DocumentoForm.css'

const DocumentoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label>DOCUMENTAÇÃO DO VEÍCULO</label>
        </div>

        <div className="yesOrNot">
          <p>SIM</p>
          <p>NÃO</p>
        </div>

        <div className="radio-row">
          <div className="label">CRLV</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='crlv-sim'
                name="crlv"
                checked={data.crlv === "crlv-sim"}
                onChange={(e) => updateFieldHandler("crlv", e.target.value)}
              />
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

        <div className="radio-row">
          <div className="label">ANTT</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='antt-sim'
                name="antt"
                checked={data.antt === "antt-sim"}
                onChange={(e) => updateFieldHandler("antt", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='antt-nao'
                name="antt"
                checked={data.antt === "antt-nao"}
                onChange={(e) => updateFieldHandler("antt", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">DEDETIZAÇÃO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value='dedetiza-sim'
                name="dedetizacao"
                checked={data.dedetizacao === "dedetiza-sim"}
                onChange={(e) => updateFieldHandler("dedetizacao", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='dedetiza-nao'
                name="dedetizacao"
                checked={data.dedetizacao === "dedetiza-nao"}
                onChange={(e) => updateFieldHandler("dedetizacao", e.target.value)}
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

export default DocumentoForm;
