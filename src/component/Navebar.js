import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import {GiHamburgerMenu } from "react-icons/gi" ;



const Navebar = () => {
    const[showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
           
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        MERN STACK
                    </h2>
                </div>
                <div className =   {showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            
                        <NavLink to="/About">About</NavLink>
                        </li>

                        <li>
                        <NavLink to="/Contact">Contact</NavLink>
                        
                        </li>

                        <li>
                        <NavLink to="/Login">Log In</NavLink>
                        </li>

                        <li>
                        <NavLink to="/SignUp">SignUp</NavLink>
                        </li>
                    </ul>

                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaFacebookSquare className="facebook"/></a>
                                
                            
                        </li>

                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaInstagramSquare className="instagram"/></a>
                                
                            
                        </li>

                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaYoutubeSquare className="youtube"/></a>
                                
                            
                        </li>

                    </ul>
                    <div className="hamburger-menu" id="hamburger-menu">
                        <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
                    </div>

                </div>

            </nav>
        </>
    )
}


export default Navebar;