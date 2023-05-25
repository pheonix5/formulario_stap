import React from "react";
import './Userform.css'

const MotoristaForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Nome:</label>
        <select
          name="text"
          id="name"
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        >

          <option  value={data.name || "Lucas"}>Lucas Felix</option>
          <option  value={data.name || "Camila"}>Camila Vitoria</option>
          <option  value={data.name || "Amanda"}>Amanda Caroline</option>
          <option  value={data.name || "Ronara"}>Ronara Fernanda</option>
        </select>
      </div>

    </div>
  )
}

export default UserForm;