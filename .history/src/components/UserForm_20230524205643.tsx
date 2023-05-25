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

        <select>
          
        </select>
      </div>

    </div>
  )
}

export default UserForm;