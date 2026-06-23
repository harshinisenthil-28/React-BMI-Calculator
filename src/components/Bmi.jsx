import React, { useState } from 'react'

function Bmi() {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState("");
    const handleSubmit=()=>{
        const h=height/100;
        const result=weight/(h*h).toFixed(2);
        setBmi(result);
    }
  return (
    <div>
      <label>Enter the height:</label>
      <input type="number" onChange={(e)=>setHeight(e.target.value)}/><pre></pre>
      <label>Enter the weight:</label>
      <input type="number" onChange={(e)=>setWeight(e.target.value)}/><pre></pre>
      <button type="submit" onClick={handleSubmit}>Calculate</button>
      {bmi && <h2>BMI for height:{height} and weight:{weight} is {bmi}</h2>}
    </div>
  )
}

export default Bmi
