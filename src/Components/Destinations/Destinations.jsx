import React from "react";
import './Destinations.css';
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosTime } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";

import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image4.jpg';


const destinations = [
    {
        id: 1,
        image: image1,
        name: 'Amazon forest',
        location: 1,
        rating: 4.8,

    }
]

const Destinations = () => {
    return (
        <div className="destination section container">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText">
                        Explore Wild Tour
                    </span>
                    <h3>Explore the Wildlens tour</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit?</p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex">
                        <MdLocationPin className="icon" />
                        <input type="text" placeholder="Location" />
                    </div>

                    <div className="inputField flex">
                        <SlCalender className="icon" />
                        <input type="date" placeholder="Date" />
                    </div>

                    <div className="inputField flex">
                        <IoIosTime className="icon" />
                        <input type="time" placeholder="Time" />
                    </div>

                    <button className="btn flex">
                    <CiSearch />
                      SEARCH 
                    </button>
                </div>

                <div className="secMenu">
                     <ul className="flex">
                        <li className="active">All</li>
                        <li>Recommended</li>
                        <li>Deep forest</li>
                        <li>Rain forest</li>
                        <li>wild</li>
                        <li>reserved forest</li>
                     </ul>
                </div>

                <div className="destinationContainer grid">
                    <div className="singleDestination">
                        <div className="imgDiv">
                            <img src={image1} alt="Dest"/>
                            <div className="descInfo flex">
                                <div className="text">
                                    <span className="namw">Amazon forest</span>
                                    <p className="flex">
                                        <TiLocation className="icon"/> 
                                    amazon forest</p>
                                </div>
                                <span className="rating">
                                    4.8
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Destinations;