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
              <th></th>
              <th>SIM</th>
              <th>NÃO</th>
            </tr>
          </thead>
        </Table>
        
      </div>
    </div>
  );
}

export default MotorCombustivelForm;
