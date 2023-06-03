import React from "react";
import './DocumentoForm.css'

const PneusForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
      <h4>PNEUS</h4>

        <div className="yesOrNot">
          <p>SIM</p>
          <p>NÃO</p>
        </div>

        
        
      </div>
    </div>
  );
}

export default PneusForm;
