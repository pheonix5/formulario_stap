/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// Components
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { 
  addDoc,
  collection,
  query,
  orderBy,
  doc
 } from 'firebase/firestore'

import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import MotoristaForm from '../../components/FormComponents/MotoristaForm';
import DateForm from '../../components/FormComponents/DateForm'
import PlacaForm from '../../components/FormComponents/PlacaForm';
import DocumentoForm from '../../components/FormComponents/DocumentoForm';
import LimpoForm from '../../components/FormComponents/LimpoForm';
import FerramentaSegurancaForm from '../../components/FormComponents/FerramentaSegurancaForm';
import PneusForm from '../../components/FormComponents/PneusForm';
import MotorCombustivelForm from '../../components/FormComponents/MotoCombustivelForm';
import OutrosProblemasForm from '../../components/FormComponents/OutrosProblemasForm';
import ManifestoObservacaoForm from '../../components/FormComponents/ManifestoObservacaoForm';


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
  tacografo: "",
  limpo: "",
  triangulo: "",
  estepe: "",
  chaveRodas: "",
  macaco: "",
  pneuCalibrado: "",
  pneuBomEstado: "",
  nivelAgua: "",
  nivelOleo: "",
  nivelArla: "",
  farois: "",
  lanternaTrazeira: "",
  luzRe: "",
  luzFreio: "",
  setas: "",
  retrovisores: "",
  pneus: "",
  avariasLateralBau: "",
  ruidosBarulhos: "",
  manifesto: "",
  observacao: "",
}


export default function Formulario() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log(data);
  }

  const formComponents = [
    <MotoristaForm data={data}  updateFieldHandler={updateFieldHandler}/>, 
    <DateForm data={data} updateFieldHandler={updateFieldHandler}/>, 
    <PlacaForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <DocumentoForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <LimpoForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <FerramentaSegurancaForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <PneusForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <MotorCombustivelForm data={data} updateFieldHandler={updateFieldHandler} />,
    <OutrosProblemasForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ManifestoObservacaoForm data={data} updateFieldHandler={updateFieldHandler}/>
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
   <div className='app'>

    <div className="header">
      <h2>CHECK LIST PARA VEICULOS QUICK DF</h2>
      <strong>Seu feedback é muito importante pra gente</strong>
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
            <button type='submit' onClick={handleSubmit}>
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