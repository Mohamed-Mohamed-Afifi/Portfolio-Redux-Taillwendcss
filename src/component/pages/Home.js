import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Footer } from '../subComponent/footer.tsx';
import Nave from '../subComponent/nav.js';
export const Home = () => {
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
    const {validUser}=useSelector(state=>state.authoUser)
    console.log("from home ",validUser)
    return (
        <>
            <header className='header sm:bg-slate-800 lg:bg-slate-100'>
                <Nave/>    
            </header>
            <Outlet />
            <Footer/>
        </>
    )
}
