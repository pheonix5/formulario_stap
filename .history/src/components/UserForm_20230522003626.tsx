import React from "react";

const UserForm = () =>{
  return (
    <div>
      <div className="form-control">
        <label htmlFor="">Nome:</label>
        <input type="text" name="text" id="name" placeholder="Digite o seu nome"/>
      </div>

      <div className="form-control">
        <label htmlFor="">Email:</label>
        <input type="email" name="text" id="name" placeholder="Digite o seu nome"/>
      </div>
    </div>
  )
}

export default UserForm;