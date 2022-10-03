import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    const {validUser}=useSelector(state=>state.authoUser)
    console.log("valid user status",validUser)
  return (
    <>
        {!validUser ?children:<Navigate to='/'/>}
    </>
  )
}

export default Protected