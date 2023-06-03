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
              <td></td>
            </tr>
          </tbody>
        </Table>
        
      </div>
    </div>
  );
}

export default MotorCombustivelForm;
