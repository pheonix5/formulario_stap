import React from "react";

const UserForm = ({ data, updateFieldHandler }) =>{
  return (
    <div>
      <div className="form-control">
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
          <option value='Camila Vitoria'>Camila Vitoria</option>
          <option value='Amanda Caroline'>Amanda Caroline</option>
          <option value='Ronara Fernanda'>Ronara Fernanda</option>
        </select>
      </div>

    </div>
  )
}

export default UserForm;