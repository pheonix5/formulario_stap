import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi'

import React from "react"
import './Step.css'

const Steps = ({ currentStep }) =>{
  return (
    <div className="steps">
      <div className="step">
        <AiOutlineUser/>
        <p>Identificação</p>
      </div>
      <div className="step">
        <AiOutlineStar/>
        <p>Avaliação</p>
      </div>
      <div className="step">
        <FiSend/>
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps;