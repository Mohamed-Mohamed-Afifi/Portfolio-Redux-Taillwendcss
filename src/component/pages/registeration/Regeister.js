import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {
  const router=useNavigate()
  const handelSubmit=(e)=>{
    e.preventDefault();
    // check on username
    // Check on Email
    // Check on password
    if(true){
      router('/')
    }
  }
  return (
    <div className='container'>
        <form onSubmit={(e)=>handelSubmit(e)}>
            <input type='text' name='username'  placeholder='username'/>
            <input type='email' name='email'  placeholder='Your Email'/>
            <input type='password' name='password'  placeholder='Your Password'/>
        </form>
        <NavLink to='/login'>login</NavLink>
    </div>
  )
}

export default Register