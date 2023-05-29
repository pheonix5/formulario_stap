import React from "react";
import './MotoristaForm.css'

const MotoristaForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Motorista:</label>
        <select
          name="motorista"
          id="motorista"
          value={data.motorista || 'Lucas Felix'}
          onChange={(e) => updateFieldHandler('motorista', e.target.value)}
        >

          <option  value="Lucas">Lucas Felix</option>
          <option  value="Camila">Camila Vitoria</option>
          <option  value="Amanda">Amanda Caroline</option>
          <option  value="Ronara">Ronara Fernanda</option>
        </select>
      </div>

    </div>
  )
}

export default MotoristaForm;