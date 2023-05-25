
import { createBrowserRouter } from 'react-router-dom'

import Formulario from './pages/Formulario'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Formulario/>
  }
])

export { router };