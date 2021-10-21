import React from "react";
import {  NavLink } from 'react-router-dom';
// import Imageslider from "./carousel";

const mobileCard = ({ items }) => {

    return (
        <>
            {/* <div className="bg"> */}

            {/* <Imageslider /> */}

            <div className="Mflex">
                {items.map((curElem) => {
                    return (
                        <>
                            <div className="Mcontainer" key={curElem.id}>
                                <div className="Mcard">
                                    
                                    <img src={curElem.image} alt='images' width="180px" className='card-media' /><br/>
                                    {/* <span>{curElem.id}</span> <br/>                                    */}
                                    <span>Name:{curElem.name}</span>
                                    <span>{curElem.catagory}</span>                                    
                                    <p>{curElem.feature} </p>
                                    <p>{curElem.price} </p>
                                    <button>  <NavLink to="/Contact">Buy</NavLink></button>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div>
            {/* </div> */}
        </>
    )
}

export default mobileCard;