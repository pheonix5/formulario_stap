import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './App'

import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root'))(
  <React.StrictMode>
    <ToastContainer autoClose={1500}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
