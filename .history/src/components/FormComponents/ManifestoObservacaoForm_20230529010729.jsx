import React from "react";

const ManifestoObservacaoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label>NÚMERO DO MANIFESTO (Opcional)</label>
        </div>
        <input
          type="text"
          value={data.manifesto}
          name="manifesto"
          onChange={(e) => updateFieldHandler("manifesto", e.target.value)}
        />

<div className="titulo">
          <label>NÚMERO DO MANIFESTO (Opcional)</label>
        </div>
        <input
          type="text"
          value={data.manifesto}
          name="manifesto"
          onChange={(e) => updateFieldHandler("manifesto", e.target.value)}
        />
        

        
        
      </div>
    </div>
  );
}

export default ManifestoObservacaoForm;
