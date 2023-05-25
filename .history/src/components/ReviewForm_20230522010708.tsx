import React from "react";

const ReviewForm = () =>{
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" />
        </label>
      </div>
    </div>
  )
}

export default ReviewForm;