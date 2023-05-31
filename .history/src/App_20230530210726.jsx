
import { createBrowserRouter } from 'react-router-dom'

import Formulario from './pages/Formulario'
import Login from './pages/Login';
import Admin from './pages/Admin'
import Error from './pages/Error'

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
    Component: <Private> <Admin/> </Private>
  },
  {
    path: '*',
    Component: <Error/>
  }
])


export default router;