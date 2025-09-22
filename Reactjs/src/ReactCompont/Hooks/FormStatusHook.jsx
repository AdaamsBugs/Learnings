import React from 'react'
import { useFormState } from 'react-dom'

const FormStatusHook = () => {

    const handelBtn =async()=>{await new Promise (res =>setTimeout(res,2000))
        console.log('Got it Bro')
    

    }
    const disableBtn =()=>{
        const pendding = useFormState()
    }
  return (
    <form action={handelBtn}>
        <input type="text" placeholder='Enter Your Email' />
        <input type="text" placeholder='Describe your Desease' />
        <button disabled={pendding}>Submit</button>
    </form>
  )
}

export default FormStatusHook