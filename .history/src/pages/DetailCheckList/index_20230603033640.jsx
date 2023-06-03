import React from "react";
import './detailchecklist.css'

import { useParams } from "react-router-dom";

export default function DetailCheckList(){
  const { item } = useParams();

  return(
    <div className="container">
      <h1>CheckList - Lucas Felix</h1>

    </div>
  )
}