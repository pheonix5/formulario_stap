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
              <input type="radio" name="crlv" checked={data.documento === "sim"} />
              
            </label>
            <label className="radio-label">
              <input type="radio" name="crlv" checked={data.documento === "nao"} />
              
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">ANTT</div>
          <div className="radio-options">
            <label className="radio-label">
              <input type="radio" name="antt" value="O" />
              
            </label>
            <label className="radio-label">
              <input type="radio" name="antt" value="O" />
              
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">DEDETIZAÇÃO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input type="radio" name="dedetizacao" value="O" />
              
            </label>
            <label className="radio-label">
              <input type="radio" name="dedetizacao" value="O" />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">CVV</div>
          <div className="radio-options">
            <label className="radio-label">
              <input type="radio" name="cvv" value="O" />
              
            </label>
            <label className="radio-label">
              <input type="radio" name="cvv" value="O" />
            </label>
          </div>
        </div>

        <div className="radio-row">
          <div className="label">TACÓGRAFO</div>
          <div className="radio-options">
            <label className="radio-label">
              <input type="radio" name="tacografo" value="O" />
              
            </label>
            <label className="radio-label">
              <input type="radio" name="tacografo" value="O" />
            </label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DocumentoForm;