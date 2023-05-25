/* eslint-disable no-unused-vars */
// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import './App.css'

function App() {

  return (
   <div className='app'>
    <div className="header">
      <h2>Deixe Sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto</p>
    </div>
    <div className="form-container">
      <p>etapas</p>
      <form>
        <div className="acionts">
          <button type='button'>
            <span>Voltar</span>
          </button>
          <button type='submit'>Avançar</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default App
