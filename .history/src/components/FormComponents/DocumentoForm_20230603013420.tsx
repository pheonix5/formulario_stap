import React from "react";
import './DocumentoForm.css'

const DocumentoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        

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
                value='sim'
                name="crlv"
                checked={data.crlv === "sim"}
                onChange={(e) => updateFieldHandler("crlv", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="crlv"
                checked={data.crlv === "nao"}
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
                value='sim'
                name="antt"
                checked={data.antt === "sim"}
                onChange={(e) => updateFieldHandler("antt", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="antt"
                checked={data.antt === "nao"}
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
                value='sim'
                name="dedetizacao"
                checked={data.dedetizacao === "sim"}
                onChange={(e) => updateFieldHandler("dedetizacao", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="dedetizacao"
                checked={data.dedetizacao === "nao"}
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
                value='sim'
                name="cvv"
                checked={data.cvv === "sim"}
                onChange={(e) => updateFieldHandler("cvv", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="cvv"
                checked={data.cvv === "nao"}
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
                value='sim'
                name="tacografo"
                checked={data.tacografo === "sim"}
                onChange={(e) => updateFieldHandler("tacografo", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value='nao'
                name="tacografo"
                checked={data.tacografo === "nao"}
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
