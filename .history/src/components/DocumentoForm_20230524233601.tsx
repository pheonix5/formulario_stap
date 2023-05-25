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
      <div className="form-title">
            Documentação do Veículo *
        </div>
        
        <div className="form-question">
            <label>CRLV</label>
            <div className="form-option">
                <input type="radio" name="crlv" value="sim" id="crlv-sim"/>
                <label htmlFor="crlv-sim">SIM</label>
            </div>
            <div className="form-option">
                <input type="radio" name="crlv" value="nao" id="crlv-nao"/>
                <label htmlFor="crlv-nao">NÃO</label>
            </div>
        </div>
        
        <div className="form-question">
            <label>ANTT</label>
            <div className="form-option">
                <input type="radio" name="antt" value="sim" id="antt-sim"/>
                <label htmlFor="antt-sim">SIM</label>
            </div>
            <div className="form-option">
                <input type="radio" name="antt" value="nao" id="antt-nao"/>
                <label htmlFor="antt-nao">NÃO</label>
            </div>
        </div>
        
        <div className="form-question">
            <label>DEDETIZAÇÃO</label>
            <div className="form-option">
                <input type="radio" name="dedetizacao" value="sim" id="dedetizacao-sim"/>
                <label htmlFor="dedetizacao-sim">SIM</label>
            </div>
            <div className="form-option">
                <input type="radio" name="dedetizacao" value="nao" id="dedetizacao-nao"/>
                <label htmlFor="dedetizacao-nao">NÃO</label>
            </div>
        </div>
    </div>
  )
}

export default DocumentoForm;