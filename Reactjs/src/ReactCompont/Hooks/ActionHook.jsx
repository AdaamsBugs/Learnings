import React, { useActionState } from 'react'

const ActionHook = () => {

 const handelSubmet = async (previous,fromData)=>{
    let name = fromData.get('name')
    let password = fromData.get('password')
     
    
    await new Promise((res) => setTimeout(res, 2000));
    
    // console.log('function working',name , password)
    return name && password ? {massage:'Data Submited'} :{error:'Some Issue'}
      
    }





    
    const [data,action,pending] = useActionState(handelSubmet,undefined)
    
    
    
  return (
    <div>
        <form action={action}>
            <input type="text" placeholder='Enter your email' name='name' />
            <input type="text" placeholder='Enter your Password' name='password' />
            <button disabled={pending}> Submit</button>
           {data && (
  data.error
    ? <span style={{ color: 'red' }}>{data.error}</span>
    : <span style={{ color: 'green' }}>{data.message}</span>
)}
        </form>
     
    </div>
  )
}

export default ActionHook