import React from 'react';
import logo from '../assets/icons/logo1.png';
import '../styles/HomePage.css';
import {Link} from 'react-router-dom';





const Navigation = () => {


    return(
        <>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/properties">Search Properties</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    
                </ul>
                
            </div>
        </nav>


        </>
  );

}
export default Navigation;