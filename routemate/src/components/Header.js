import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg"
const Header = () => {
    return (
        <header>
           <Link className='logo'><img src={logo} alt="" />
           <span>RouteMate</span>
           </Link>
           <nav className='navigation'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'products'}>Products</NavLink>
            <NavLink to={'contact'}>Contact Us</NavLink>

           </nav>
        </header>
    );
};

export default Header;