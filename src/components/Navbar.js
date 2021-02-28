import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
         <Link to='/' classname='navbar-logo'>
             INNI BUDGIE <i classname='fab fa-typo3' />
             </Link> 
        </div>
    </nav>
   </>
    );
}

export default Navbar
