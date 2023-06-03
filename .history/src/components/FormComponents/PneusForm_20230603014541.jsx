import React from "react";
import './DocumentoForm.css'
import { Table } from "react-bootstrap";

const PneusForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
      <h4>PNEUS</h4>

        <Table striped bordered>
          <thead>
            <tr>
              <th></th>
              <th>SIM</th>
              <th>NÂO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calibrados</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="calibrado"
                  checked={data.pneuCalibrado === "sim"}
                  onChange={(e) => updateFieldHandler("pneuCalibrado", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="calibrado"
                  checked={data.pneuCalibrado === "nao"}
                  onChange={(e) => updateFieldHandler("pneuCalibrado", e.target.value)}
                />
              </td>
            </tr>
          </tbody>

        </Table>
        
      </div>
    </div>
  );
}

export default PneusForm;
