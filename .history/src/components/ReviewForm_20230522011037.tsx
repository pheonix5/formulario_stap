import React from "react";

import {
   BsFillEmojiHeartEyesFill,
   BsFillEmojiSmileFill,
   BsFillEmojiNeutralFill,
   BsFillEmojiFrownFill
 } from 'react-icons/bs'

const ReviewForm = () =>{
  return (
    <div className="review-form">
      <div className="form-control score-container">

        <label className="radio-container">
          <input type="radio" value="unsatisfied"  name="review" required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="neutral"  name="review" required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="unsatisfied"  name="review" required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="unsatisfied"  name="review" required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        
      </div>
    </div>
  )
}

export default ReviewForm;