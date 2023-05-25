import React from "react";
import './Userform.css'

const UserForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="select">
        <label htmlFor="">Nome:</label>
        {/* <input 
          type="text" 
          name="text" 
          id="name" 
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        /> */}

        <select
          name="text"
          id="name"
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