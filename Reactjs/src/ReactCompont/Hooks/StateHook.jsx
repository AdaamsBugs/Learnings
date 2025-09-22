import React, { useState } from 'react'

const StateHook = () => {
    const [age ,UpdateAge]=useState('20')


  return (
    <div>
      <h1>I am {age}</h1>
      <button onClick={()=>UpdateAge('Immortal')}>Update Age</button>
      




    </div>
  )
}

export default StateHook