import React from "react";
import './DocumentoForm.css'

import { Table } from 'react-bootstrap' 

const DocumentoForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="radio-group">
        <h4>Documentação do Veículo</h4>

        <Table striped hover size="sm">

        </Table>
      </div>
    </div>
  );
}

export default DocumentoForm;
