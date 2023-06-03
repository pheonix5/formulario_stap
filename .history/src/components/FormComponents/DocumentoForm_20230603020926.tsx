import React from "react";
import './DocumentoForm.css'

import { Table } from 'react-bootstrap' 

const DocumentoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <h4>Documentação do Veículo</h4>

        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Documento</th>
              <th>SIM</th>
              <th>NÃO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CRLV</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="crlv"
                  checked={data.crlv === "sim"}
                  onChange={(e) => updateFieldHandler("crlv", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="crlv"
                  checked={data.crlv === "nao"}
                  onChange={(e) => updateFieldHandler("crlv", e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>ANTT</td>
              <td>
                <input
                type="radio"
                value='sim'
                name="antt"
                checked={data.antt === "sim"}
                onChange={(e) => updateFieldHandler("antt", e.target.value)}
                required
                />
              </td>
              <td>
                <input
                type="radio"
                value='nao'
                name="antt"
                checked={data.antt === "nao"}
                onChange={(e) => updateFieldHandler("antt", e.target.value)}
                required
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DocumentoForm;
