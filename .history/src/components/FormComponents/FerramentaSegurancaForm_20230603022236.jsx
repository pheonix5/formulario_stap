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
              <th>SIM</th>
              <th>NÃO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TRIANGULO</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="triangulo"
                  checked={data.triangulo === "sim"}
                  onChange={(e) => updateFieldHandler("triangulo", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="triangulo"
                  checked={data.triangulo === "nao"}
                  onChange={(e) => updateFieldHandler("triangulo", e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>ESTEPE</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="estepe"
                  checked={data.estepe === "sim"}
                  onChange={(e) => updateFieldHandler("estepe", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="estepe"
                  checked={data.estepe === "nao"}
                  onChange={(e) => updateFieldHandler("estepe", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>CHAVE DE RODAS</td>
              <td>
                <input
                  type="radio"
                  value='sim'
                  name="chaveRoda"
                  checked={data.chaveRodas === "sim"}
                  onChange={(e) => updateFieldHandler("chaveRodas", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  value='nao'
                  name="chaveRodas"
                  checked={data.chaveRodas === "nao"}
                  onChange={(e) => updateFieldHandler("chaveRodas", e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>

      </div>
    </div>
  );
}

export default FerramentaSegurancaForm;
