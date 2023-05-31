
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Formulario from './pages/Formulario'
import Login from './pages/Login';
import Admin from './pages/Admin'
import Error from './pages/Error'

const router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Formulario}/>
        <Route path='/login' element={Login}/>
        <Route path='/admin' element={Admin}/>
        <Route path='*' element={Error}/>
      </Routes>
    </BrowserRouter>
  )
}


export default router;