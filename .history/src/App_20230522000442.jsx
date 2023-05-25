/* eslint-disable no-unused-vars */
// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import './App.css'

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
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meupositivo.com.br%2Fdoseujeito%2Fentretenimento%2Fcuriosidades%2Ffoto-do-sol-alta-qualidade%2F&psig=AOvVaw1IL9o5GLJJjwK68pTI8HJD&ust=1684811058062000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCQlrf4h_8CFQAAAAAdAAAAABAE'/>
        </div>
      </form>
    </div>

   </div>
  )
}

export default App
