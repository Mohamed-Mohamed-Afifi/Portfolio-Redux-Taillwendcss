import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import User from './User';
const UserIcon = ({state}) => {
    // if(state){
    //     console.log("first")
    //     window.onclick=()=>{
    //         setState(false)
    //     }
    // }
  return (
    <>
        <FontAwesomeIcon icon={faUser} className="mx-2"/><User status={state}/>
    </>
  )
}

export default UserIcon