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
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default Thanks;