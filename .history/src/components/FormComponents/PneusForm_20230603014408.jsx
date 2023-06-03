import React from "react";
import './DocumentoForm.css'
import { Table } from "react-bootstrap";

const PneusForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
      <h4>PNEUS</h4>

        <Table>
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
            </tr>
          </tbody>

        </Table>
        
      </div>
    </div>
  );
}

export default PneusForm;
