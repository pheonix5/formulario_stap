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
                type="checkbox"
                value='crlv-sim'
                name="crlv"
                checked={data.documento === "crlv-sim"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />
            </label>
            <label className="radio-label">
              <input
                type="checkbox"
                value='crlv-nao'
                name="crlv"
                checked={data.documento === "crlv-nao"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">ANTT</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="checkbox"
                value='antt-sim'
                name="antt"
                checked={data.documento === "antt-sim"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)} />

            </label>
            <label className="radio-label">
              <input
                type="checkbox"
                value='antt-nao'
                name="antt"
                checked={data.documento === "antt-"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />

            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">DEDETIZAÇÃO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="checkbox"
                value='dedetiza-sim'
                name="dedetizacao"
                checked={data.documento === "dedetiza-sim"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />

            </label>
            <label className="radio-label">
              <input
                type="checkbox"
                value='dedetiza-nao'
                name="dedetizacao"
                checked={data.documento === "dedetiza-nao"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">CVV</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="checkbox"
                value='cvv-sim'
                name="cvv"
                checked={data.documento === "cvv-sim"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />

            </label>
            <label className="radio-label">
              <input
                type="checkbox"
                value='cvv-nao'
                name="cvv"
                checked={data.documento === "cvv-nao"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">TACÓGRAFO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="checkbox"
                value='tacografo-sim'
                name="tacografo"
                checked={data.documento === "tacografo-sim"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />

            </label>
            <label className="radio-label">
              <input
                type="checkbox"
                value='tacografo-nao'
                name="tacografo"
                checked={data.documento === "tacografo-nao"}
                onChange={(e) => updateFieldHandler("documento", e.target.value)}
              />
            </label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DocumentoForm;