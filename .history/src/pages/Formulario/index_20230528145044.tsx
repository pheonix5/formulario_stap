/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// Components
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from '../../components/MotoristaForm';
import DateForm from '../../components/DateForm';
import PlacaForm from '../../components/PlacaForm';
import DocumentoForm from '../../components/DocumentoForm';
import LimpoForm from '../../components/LimpoForm';

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
  limpo: ""
}

type Motorista ={
  id: string;
  nome: String
}

export default function Formulario() {
  const [listaMotorista, setListaMototista] = useState<Motorista[]>([]);
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })
  }

  function handleSubmit(){
    console.log(data);
  }

  const formComponents = [
    <UserForm data={data}  updateFieldHandler={updateFieldHandler}/>, 
    <DateForm data={data} updateFieldHandler={updateFieldHandler}/>, 
    <PlacaForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <DocumentoForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <LimpoForm data={data} updateFieldHandler={updateFieldHandler}/>
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  useEffect(() => {
    
    const motoristaRef = collection(db, "motorista")
    const queryRef = query(motoristaRef, orderBy("nome", 'asc'))

    const unsub = onSnapshot(queryRef, (snapshot) =>{
      const lista: Motorista[] = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome
        });
      })

      setListaMototista(lista);
      
    })
  }, [])

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