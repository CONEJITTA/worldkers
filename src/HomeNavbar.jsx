import React from 'react';
import logo2 from './logo2.svg';

function HomeNavbar() {
    return (
        <div>
            <nav className="homenavbar">
                <ul>
                    <li className="logoapp">
                        <img src={logo2} alt="Logo2" /> 
                    </li>

                  

                    <li className="nav-item">
                        <a href="">Help</a>
                    </li>

                    <li className="nav-item">
                        <a href="">About us</a>
                    </li>

                    <li className="nav-item">
                        <button>Log In</button>
                    </li>
                </ul>
            </nav>
        </div>

        
    )
}

export default HomeNavbar

