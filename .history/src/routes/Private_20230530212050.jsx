import React, {useState, useEffect  } from "react";

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

import { Navigate } from 'react-router-dom'

export default function Private({ children }){
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(true);

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return <Navigate to="/login"/>
  }

  return children;
}