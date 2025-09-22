import {useEffect, useState} from 'react'

const EffectHook = () => {
  const [value, UpdateValue]=useState(0)



useEffect(()=>{
   const timer = setInterval(() => {
        UpdateValue(preValue => preValue + 1)
    }, 1000);
    return ()=> clearInterval(timer)
},[])



  return (
    <div>
        <h1>This is UseEffect Hook File</h1>
        <h1>{value}</h1>
    </div>
  )
}

export default EffectHook