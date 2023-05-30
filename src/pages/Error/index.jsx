
import './erro.css'

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'


export default function Error(){
    return(
        <div className='error'> 
             <Logo/>   

            <h1>Página não encontrada!!</h1>
            <p>Esta página que está procurando não existe</p>

            <Link to="/" className='link'>
                Voltar Para o Formulário
            </Link>
        </div>
    )
}