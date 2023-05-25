import React from "react";
import './DocumentoForm.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const DocumentoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
  <div className="radio-row">
    <div className="label">Documentação do veículo</div>
    <div className="radio-options">
      <label className="radio-label">
        <input type="radio" name="documentacao" value="SIM" />
        SIM
      </label>
      <label className="radio-label">
        <input type="radio" name="documentacao" value="NÃO" />
        NÃO
      </label>
    </div>
  </div>
  
  <div className="radio-row">
    <div className="label">CRLV</div>
    <div className="radio-options">
      <label className="radio-label">
        <input type="radio" name="crlv" value="O" />
        O
      </label>
      <label className="radio-label">
        <input type="radio" name="crlv" value="O" />
        O
      </label>
    </div>
  </div>
  
  <div className="radio-row">
    <div className="label">ANTT</div>
    <div className="radio-options">
      <label className="radio-label">
        <input type="radio" name="antt" value="O" />
        O
      </label>
      <label className="radio-label">
        <input type="radio" name="antt" value="O" />
        O
      </label>
    </div>
  </div>
  
  <div className="radio-row">
    <div className="label">DEDETIZAÇÃO</div>
    <div className="radio-options">
      <label className="radio-label">
        <input type="radio" name="dedetizacao" value="O" />
        O
      </label>
      <label className="radio-label">
        <input type="radio" name="dedetizacao" value="O" />
        O
      </label>
    </div>
  </div>
</div>

    </div>
  )
}

export default DocumentoForm;