
import { createBrowserRouter } from 'react-router-dom'

import Formulario from './pages/Formulario'
import Login from './pages/Login';
import Admin from './pages/Admin'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Formulario
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/admin',
    Component: Admin
  },
  {
    path: '*',
    Component: Error
  }
])


export default router;