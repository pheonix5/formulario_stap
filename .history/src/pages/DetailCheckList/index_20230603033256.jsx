import React from "react";

import { useParams } from "react-router-dom";

export default function DetailCheckList(){
  const { id } = useParams();

  return(
    <div className="container">
      <h1>Tela detalhes</h1>
    </div>
  )
}