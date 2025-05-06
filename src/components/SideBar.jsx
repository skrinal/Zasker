import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/zaskerLogo.jpg'
import './style/SideBar.css'

const SideBar = () => {  
    return (
        <div className='sidebar'>

            <div className='logosegment' >
                <img src={Logo} className='logo'/>
                <p className='logotext' >Zasker</p>
            </div>

            <div className='mainmenu'>
                <p>Main Menu </p>
                <div className='options'>
                    <Link to="/"> <button>To-do</button> </Link>
                    
                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Default</Link>
                            </li>
                            <li>
                                <Link to="/page2">Page2</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            

            <div className='lists' >

            </div>
        </div>
    );
};

export default SideBar;