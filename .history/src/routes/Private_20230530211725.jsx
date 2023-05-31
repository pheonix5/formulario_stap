import React, {useState, useEffect  } from "react";

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

export default function Private({ children }){


  return children;
}