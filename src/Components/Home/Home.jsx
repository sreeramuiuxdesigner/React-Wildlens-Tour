import React from "react";
import './Home.css';

import Video from '../../Assets/Video.mp4';
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () =>{
    return (
        <div className="Home">
            <div className="videoBg">
                <video src={Video} autoplay loop muted></video>
                </div>
       
    
    <div className="sectionText">
        <h1>Wildlens tour</h1>
        <p>WildLens Tours is likely a company or organization that specializes in wildlife photography and nature tours.</p>
        <button className="btn flex">
            START TOUR <AiOutlineSwapRight className="icon" />
        </button>
    </div>


    <div className="popularPlaces">
        <div className="content">
            <h3>Popular Places</h3>
            <div className="images flex">

            </div>
        </div>
    </div>


    </div>
    );
};

export default Home;