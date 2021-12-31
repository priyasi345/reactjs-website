import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {MdFingerprint} from'react-icons/md'
import { FaBars , FaTimes, FaWindows} from 'react-icons/fa'
// import {Button} from './Button';

import './Navbar.css';
import { IconContext} from 'react-icons/lib'
import Assets from './Assets/CodeLoverTech_Logo.png';


function Navbar() {
    const [click,setclick]=useState(false)
    const [button,setButton]=useState(true)

    const handleClick =() => setclick(!click);
    const closeMobileMenu = () => setclick(false)
    const showButton = () => {
   if(window.innerWidth <= 960){
      setButton(false)
       } else {
          setButton(true)
        }
        };
         window.addEventListener('resize',showButton);
    
    return (
        <>
        
        <IconContext.Provider value={{color: '#fff'}}>
         <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <img src={Assets} alt="CodeLover Technology Pvt Ltd" className='imagelogo'/>
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                 {click ? <FaTimes /> : <FaBars />}  
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className="nav-item">
                    
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Home
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                             Profile
                         </Link>
                     </li>
                    
                     
                     <li className="nav-item">
                         <Link to='/technology' className='nav-links' onClick={closeMobileMenu}>
                            Technology
                         </Link>
                     </li>
                    
                     <li className="nav-item">
                         <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                             Services
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                          Products
                         </Link>
                     </li>
                    
                     <li className="nav-item">
                         <Link to='/makeinindia' className='nav-links' onClick={closeMobileMenu}>
                         Make In India
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                             Contact Us
                        {/* <button class="btn btn-border-slide">Contact Us</button> */}
                         </Link>
                     </li>
                    
                          
                    
                 </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
