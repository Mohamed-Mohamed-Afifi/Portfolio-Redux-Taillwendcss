import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer } from '../subComponent/footer';
import Nave from '../subComponent/nav';
export const Home = () => {
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
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