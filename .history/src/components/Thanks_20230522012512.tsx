import React from "react";
import './Thanks.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const Thanks = () =>{
  return (
    <div className="thanks-container">
      <h2>Falta Pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10%
         de desconto para sua próxima Compra</p>
      <p>Para concuir sua avaliação clique no botão enviar abaixo</p>
    </div>
  )
}

export default Thanks;