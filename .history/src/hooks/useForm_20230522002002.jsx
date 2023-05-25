/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useForm(steps){
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(i, e){
    e.preventDefault();
  }

  return{
    currentStep,
    currentComponent: steps[currentStep],
  }
}