import React from "react";

const ManifestoObservacaoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <div className="titulo">
          <label> NÚMERO DO MANIFESTO (Opcional)</label>
        </div>
        <input
          type="text"
          value={data.manifesto}
          name="manifesto"
          onChange={(e) => updateFieldHandler("manifesto", e.target.value)}
        /> <br/><br/>

        <div className="titulo">
          <label>OBSERVAÇÃO (Opcional)</label>
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
