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
                value='sim' 
                name="crlv" 
                checked={data.documento === "sim"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)} />
              
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="crlv" 
                value='nao'
                checked={data.documento === "nao"} 
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
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
                checked={data.documento === "sim"} 
                onChange={(e) => updateFieldHandler("documento",e.target.value)}/>
              
            </label>
            <label className="radio-label">
              <input 
                type="radio"
                value='nao'
                name="antt" 
                checked={data.documento === "nao"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
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
                name="dedetizacao" 
                checked={data.documento === "sim"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
              />
              
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="dedetizacao" 
                checked={data.documento === "nao"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
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
                name="cvv" 
                checked={data.documento === "sim"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
              />
              
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="cvv" 
                checked={data.documento === "nao"} 
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
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
                name="tacografo" 
                checked={data.documento === "sim"} 
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
              />
              
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="tacografo" 
                checked={data.documento === "nao"}
                onChange={(e) => updateFieldHandler("documento",e.target.value)}
              />
            </label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DocumentoForm;