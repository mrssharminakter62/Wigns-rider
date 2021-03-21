import React from 'react';
import './Destination.css';
import Map from '../../images/Map.png'


const Destination = () => {
  
    return (
        <div className="destination">
                <div className="style-form">
                    <div className="style-center">
                        <p>From</p>
                        <input type="text" />
                        <p>To</p>
                        <input type="text"/>
                        <br/>
                        <button className="btn btn-dark mt-2"
                        >Search</button>
                    </div>
                </div>
                <div>
                    <img src={Map} className="image" alt=""/>
                </div>
        </div>
    
    );
};

export default Destination; 