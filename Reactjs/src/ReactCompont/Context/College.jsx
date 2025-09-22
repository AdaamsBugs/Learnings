import React, { useContext } from 'react'
import { subjectData } from './ContextData'

const College = () => {
   const subject =useContext(subjectData)
  return (
   <h1>Hello , i am in love with {subject}</h1>
  )
}

export default College