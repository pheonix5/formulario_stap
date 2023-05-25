import React from "react";
import './DocumentoForm.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const DocumentoForm = ({ data }) => {
  return (
    <div>
      <div className="form-title">
        Documentação do Veículo *
      </div>

      <div className="form-question">
        <label>CRLV</label>
        <div className="form-option">
          <input type="radio" name="crlv" value="sim" />
          <label>SIM</label>
        </div>
        <div className="form-option">
          <input type="radio" name="crlv" value="nao" />
          <label>NÃO</label>
        </div>
      </div>

      <div className="form-question">
        <label>ANTT</label>
        <div className="form-option">
          <input type="radio" name="antt" value="sim" />
          <label>SIM</label>
        </div>
        <div className="form-option">
          <input type="radio" name="antt" value="nao" />
          <label>NÃO</label>
        </div>
      </div>

      <div className="form-question">
        <label>DEDETIZAÇÃO</label>
        <div className="form-option">
          <input type="radio" name="dedetizacao" value="sim" />
          <label>SIM</label>
        </div>
        <div className="form-option">
          <input type="radio" name="dedetizacao" value="nao" />
          <label>NÃO</label>
        </div>
      </div>
    </div>
  )
}

export default DocumentoForm;