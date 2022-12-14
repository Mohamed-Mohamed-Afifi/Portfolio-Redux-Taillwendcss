import React, { useState } from 'react';
import {Navbar} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import LogsBtn from './LogsBtn.tsx';
import { useSelector } from 'react-redux';
import User from './User';
import UserIcon from './UserIcon';
import { Fragment } from 'react';
const Nave = () => {
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
    let count='2';
    let verfiedUser=useSelector(state=>state.authoUser.validUser)
    let [apper,setApper]=useState(false)

  return (
    <Navbar color="faded" light className='navbar-expand-lg container'>
        <div className='brand'>Afifiy</div>
        <div className='links mx-auto'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Products' className='mx-2'>Products</NavLink>
            <NavLink to='Contact'>Contact</NavLink>  
        </div>
        <div className='log d-flex flex-row justify-center items-center'>
            <div className='chartNum'>
            <FontAwesomeIcon icon={faShoppingCart} className='chart'/>
            {count &&<div className='count'>{count}</div>}
            </div>
            {!verfiedUser ?<LogsBtn/> :<Fragment><button className='user__menu' onClick={()=>setApper((prev)=>{return !prev})}><UserIcon state={apper}/></button></Fragment>}
        </div>
    </Navbar>
  )
}

export default Nave