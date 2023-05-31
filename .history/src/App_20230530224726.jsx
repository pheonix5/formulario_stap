
import { createBrowserRouter } from 'react-router-dom'

import Formulario from './pages/Formulario'
import Login from './pages/Login';
import Admin from './pages/Admin'
import Error from './pages/Error'
import Motoristas from './pages/Motoristas';

import Private from './routes/Private'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Formulario/>
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/motoristas',
    element: <Private> <Motoristas/> </Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])


export default router;