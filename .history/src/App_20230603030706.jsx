
import { createBrowserRouter } from 'react-router-dom'

import Formulario from './pages/Formulario'
import Login from './pages/Login';
import Admin from './pages/Admin'
import Error from './pages/Error'
import Motoristas from './pages/Motoristas';
import AddMotorista from './pages/AddMotorista';
import Veiculos from './pages/Veiculos';
import AddVeiculo from './pages/AddVeiculo';
import DetailCheckList from './pages/DetailCheckList';

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
    path: '/addMotorista',
    element: <Private> <AddMotorista/> </Private>
  },
  {
    path: '/veiculos',
    element: <Private> <Veiculos/> </Private>
  },
  {
    path: '/addVeiculo',
    element: <Private> <AddVeiculo/> </Private>
  },
  {
    path: '/detailCheckList',
    element: <Private> <DetailCheckList/> </Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])


export default router;