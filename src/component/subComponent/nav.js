import React from 'react';
import {Navbar} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import LogsBtn from './LogsBtn';
const Nave = () => {
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar color="faded" light className='navbar-expand-lg container'>
        <div className='brand'>Afifiy</div>
        <div className='links mx-auto'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Products' className='mx-2'>Products</NavLink>
            <NavLink to='Contact'>Contact</NavLink>  
        </div>
        <div className='log d-flex flex-row justify-center items-center'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {true ?<LogsBtn/> :<FontAwesomeIcon icon={faUser}/>}
        </div>
    </Navbar>
  )
}

export default Nave