/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// Components
import React, { useState } from 'react';

import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from '../../components/MotoristaForm';
import DateForm from '../../components/DateForm';
import PlacaForm from '../../components/PlacaForm';
import DocumentoForm from '../../components/DocumentoForm';

// Hooks
import { useForm } from '../../hooks/useForm'
import './style.css'

const formTemplate ={
  motorista: "",
  date: "",
  placa: "",
  crlv: "",
  antt: "",
  dedetizacao: "",
  cvv: "",
  tacografo: ""
}


export default function Formulario() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })
  }

  function handleSubmit(e){
    console.log(data);
    
    
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
    <DateForm data={data} updateFieldHandler={updateFieldHandler}/>, 
    <PlacaForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <DocumentoForm data={data} updateFieldHandler={updateFieldHandler}/>
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
   <div className='app'>

    <div className="header">
      <h2>Deixe Sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto</p>
    </div>

    <div className="form-container">
      <div className='logo'></div>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">{currentComponent}</div>
        <div className="actions">

          {!isFirstStep && (
            <button type='button' onClick={() => changeStep(currentStep -1 )}>
              <GrFormPrevious/>
              <span>Voltar</span>
          </button>
          )}

          {!isLastStep ? (
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
          ) : (
            <button type='button' onSubmit={handleSubmit}>
            <span>Enviar</span>
            <FiSend/>
          </button>
          )}

        </div>
      </form>
    </div>

   </div>
  )
}