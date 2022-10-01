import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AuthLogout } from '../../redux/Autorization/Logout';

const User = ({status}) => {
    const dispatch=useDispatch();
    const handelLogOut=()=>{
        console.log("logout")
        dispatch(AuthLogout())
    }
if(status){
  return (
    <div className='user__dropdown show d-flex flex-col text-left justify-center align-items-center border-3 p-3'>
        <NavLink to="/settings">Settings</NavLink>
        <button onClick={()=>handelLogOut()}>Logout</button>
    </div>
  )
}else{
    return(
        <>
        </>
    )
}
}

export default User