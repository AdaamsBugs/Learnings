import React, { useState } from 'react'
import College from './College'
import{ subjectData}  from './ContextData'
const Page = () => {

  const [subject ,updateSubject]=useState('')

  return (
    <div>


   <subjectData.Provider value={subject}>
    
   <div>
    <select value={subject} onChange={(pre)=>updateSubject(pre.target.value)}>
    <option value="English">English</option>
    <option value="Urdu">Urdu</option>
    <option value="Physics">Physics</option>
    </select>
   </div>
   <button onClick={()=>updateSubject('')} >Clear Suject</button>

      <College/>

   </subjectData.Provider>


      
    
    </div>
  )
}

export default Page