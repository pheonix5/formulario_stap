<div className="yesOrNot">
<p>SIM</p>
<p>NÃO</p>
</div>

<div className="radio-row">
<div className="label">NÍVEL DE ÁGUA</div>
<div className="radio-options">
  <label className="radio-label">
    <input
      type="radio"
      value='sim'
      name="nivelagua"
      checked={data.nivelAgua === "sim"}
      onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
      required
    />
  </label>
  <label className="radio-label">
    <input
      type="radio"
      value='nao'
      name="nivelagua"
      checked={data.nivelAgua === "nao"}
      onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
      required
    />
  </label>
</div>
</div>

<div className="radio-row">
<div className="label">NÍVEL DE ÓLEO</div>
<div className="radio-options">
  <label className="radio-label">
    <input
      type="radio"
      value='sim'
      name="niveloleo"
      checked={data.nivelOleo === "sim"}
      onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
      required
    />
  </label>
  <label className="radio-label">
    <input
      type="radio"
      value='nao'
      name="niveloleo"
      checked={data.nivelOleo === "nao"}
      onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
      required
    />
  </label>
</div>
</div>

<div className="radio-row">
<div className="label">NÍVEL DE ARLA</div>
<div className="radio-options">
  <label className="radio-label">
    <input
      type="radio"
      value='sim'
      name="nivelarla"
      checked={data.nivelArla === "sim"}
      onChange={(e) => updateFieldHandler("nivelArla", e.target.value)}
      required
    />
  </label>
  <label className="radio-label">
    <input
      type="radio"
      value='nao'
      name="nivelarla"
      checked={data.nivelArla === "nao"}
      onChange={(e) => updateFieldHandler("nivelArla", e.target.value)}
      required
    />
  </label>
</div>
</div>