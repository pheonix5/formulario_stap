import React, {useState, useEffect  } from "react";

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

export default function Private({ children }){
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  if(loading){
    return(
      <div></div>
    )
  }


  return children;
}