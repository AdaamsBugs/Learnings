import React, { useState, useTransition } from 'react'

const TransitionHook = () => {
  const [pending, updatePending]=useTransition()

  const handelBtn =  ()=>{
   
    updatePending(async ()  =>{
      await  new Promise (res =>setTimeout( res, 2000))
    }  )

  }

  return (
  
      <button disabled={pending} onClick={handelBtn}> Click Me Baby </button>
  )
}

export default TransitionHook