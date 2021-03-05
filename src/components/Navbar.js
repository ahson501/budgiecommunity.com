import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closemobilemenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    useEffect(() => {
      showButton();}, []); 
      
    window.addEventListener('resize', showButton);
    
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
         <Link to='/' classname='navbar-logo' onClick={closemobilemenu}>
             INNI BUDGIE <i classname='fab fa-typo3' />
             </Link>
             <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closemobilemenu}>
        Inni Budgie Habits
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closemobilemenu}>
        Inni Budgie Products
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closemobilemenu}>
        Inni Budgie Food
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closemobilemenu}>
        Inni Budgie Names 
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/' className='nav-links-mobile' onClick={closemobilemenu}>
        Inni Budgie Toys
        </Link>
       </li>
       <li className='nav-item'>
        <Link to='/' className='nav-links-mobile' onClick={closemobilemenu}>
        Subscribe My Channel!
        </Link>
       </li>
      </ul>
               
        {button && <Button buttonStyle='btn--outline'>Inni Budgie Products</Button>}
            </div>
    </nav>
   </>
    );
}

export default Navbar
