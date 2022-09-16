import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = () => {
  const router=useNavigate()
  const handelSubmit=(e)=>{
    e.preventDefault();
    // Check on Email
    // Check on password
    if(true){
      router('/')
    }
  }
  return (
    <div className='container'>
    <form className='mx-auto w-full md:w-60' onSubmit={(e)=>handelSubmit(e)}>
    <input type='email' name='email'  placeholder='Your Email'/>
    <input type='password' name='password'  placeholder='Your Password'/>
    <button type='submit'>submit</button>
    </form>
        <div className='logLinks d-flex flex-col'>
        <NavLink to='/register'>Signup</NavLink>
        <NavLink to='/resetPasseord'>Forget Password ?</NavLink>
       </div>
    </div>
  )
}
