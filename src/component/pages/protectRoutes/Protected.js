import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    
  return (
    <div>
        {true ?children:<Navigate to='/'/>}
    </div>
  )
}

export default Protected