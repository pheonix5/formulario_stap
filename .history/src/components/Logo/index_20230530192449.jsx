
import './logo.css'
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <Link to="/">
            <h1 className=''>Qui<span className='logo-text'>ck</span></h1>
        </Link>
        
    )
}