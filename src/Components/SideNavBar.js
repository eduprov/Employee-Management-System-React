import React, {useState} from 'react'
import './SideNavBar.css'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';


const  SideNavBar = () => {
    const [click, setClick]=useState(false);

    const handClick=()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className='navbar'>
           <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            </Link> 
            <div className='menu-icon' onClick={handClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                   <Link to='/' className='nav-links text-white ' onClick={closeMobileMenu}>
                     Dashboard
                   </Link>
                </li>
                
               
              
            </ul>
            </div>    
           </div> 
           </IconContext.Provider>
           
        </>
    )
}

export default SideNavBar
// const logout = () =>{
//     localStorage.clear();
//     window.location.href="http://localhost:3000";
//     window.location.reload();
// }