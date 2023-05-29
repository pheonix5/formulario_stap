import React from "react";

const ManifestoObservacaoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
          <label>NÚMERO DO MANIFESTO (Opcional)</label>
        <input
          type="text"
          value={data.manifesto}
          name="manifesto"
          onChange={(e) => updateFieldHandler("manifesto", e.target.value)}
        /> <br/><br/>

        <label>OBSERVAÇÃO (Opcional)</label>
        <input
          type="text"
          value={data.manifesto}
          name="manifesto"
          placeholder="...."
          onChange={(e) => updateFieldHandler("manifesto", e.target.value)}
        /><br/>
        

        
        
      </div>
    </div>
  );
}

export default ManifestoObservacaoForm;
