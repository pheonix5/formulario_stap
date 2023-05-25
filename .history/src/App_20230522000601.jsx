/* eslint-disable no-unused-vars */
// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import './App.css'
import { url } from 'inspector'

function App() {

  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>];

  return (
   <div className='app'>

    <div className="header">
      <h2>Deixe Sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto</p>
    </div>

    <div className="form-container">
      <p>etapas</p>
      <form>
        <div className="inputs-container"></div>
        <div className="actions">
          <button type='button'>
            <GrFormPrevious/>
            <span>Voltar</span>
          </button>
          <button type='submit'>
            <span>Avançar</span>
            <GrFormNext/>
          </button>
          <h1>Maria de Jesus Felix Dias</h1>
          <h1>Nilza Felix Dias</h1>
          <img src={url: 'https://media.giphy.com/media/ctGFLebG1AqK4/giphy.gif'}/>
        </div>
      </form>
    </div>

   </div>
  )
}

export default App
