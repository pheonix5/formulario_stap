import React from "react";
import './DocumentoForm.css'
import { Table } from "react-bootstrap";

const MotorCombustivelForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <h4>Motor e Combustível</h4>

        <Table striped hover>
          <thead>
            <tr>
              <th>Recurso</th>
              <th>SIM</th>
              <th>NÃO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NÍVEL DE ÁGUA</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="nivelagua"
                  checked={data.nivelAgua === "sim"}
                  onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="nivelagua"
                  checked={data.nivelAgua === "nao"}
                  onChange={(e) => updateFieldHandler("nivelAgua", e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>NÍVEL DE ÓLEO</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="niveloleo"
                  checked={data.nivelOleo === "sim"}
                  onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="niveloleo"
                  checked={data.nivelOleo === "nao"}
                  onChange={(e) => updateFieldHandler("nivelOleo", e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>NÍVEL DE ARLA</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        
      </div>
    </div>
  );
}

export default MotorCombustivelForm;
