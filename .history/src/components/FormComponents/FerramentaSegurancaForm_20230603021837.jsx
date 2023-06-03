import React from "react";
import './DocumentoForm.css'
import { Table } from "react-bootstrap";

const FerramentaSegurancaForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <h4>Ferramentas de Segurança</h4>

        <Table striped hover>
          <thead>
            <tr>
              <th>Ferramenta</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </Table>

      </div>
    </div>
  );
}

export default FerramentaSegurancaForm;
