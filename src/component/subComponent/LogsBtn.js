import React from 'react'
import { NavLink } from 'react-router-dom'

const LogsBtn = () => {
  return (
    <div>
        <NavLink to='/login' className='mx-2'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
    </div>
  )
}

export default LogsBtn