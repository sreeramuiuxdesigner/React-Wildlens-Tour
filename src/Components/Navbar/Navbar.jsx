import React, { useState } from "react";
import './Navbar.css';

import { FaReact } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {

    const [navBar, setNavBar] = useState("menu");

    const showNavBar = ()=>{
        setNavBar("menu showNavBar");
    };

    const removeNavBar = ()=>{
        setNavBar("menu");
    };
    

    return (
        <div className="navBar">

            <div className="logoDiv" >
            <FaReact className="icon" />
            <span>Wildlens Tour</span>
            </div>
            

              <div className={navBar}>
                <ul>
                    <li className="navList">
                        Destination
                    </li>
                    <li className="navList">
                        About Us
                    </li>
                    <li className="navList">
                        Gallery
                    </li>
                    <li className="navList">
                        Testimonal
                    </li>
                </ul>
                <AiFillCloseCircle className="icon closeIcon" 
                onClick={removeNavBar}/>
              </div>
<button className="signUpBtn btn">Sign Up</button>
<PiDotsNineBold className="icon menuIcon"
onClick={showNavBar}/>
        </div>
    )
}

export default Navbar;
