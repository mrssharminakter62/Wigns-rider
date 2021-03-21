import React from 'react';
import carData from '../../data/data.json' 
import { useEffect } from 'react';
import { useState } from 'react';
import Car from '../Car/Car';
import './Home.css'



const Home = () => {

    const [cars, setCars] = useState([]);
    useEffect(() =>{setCars(carData)},[]);

    return (
            <div className="bg-img">
                <div>
          {
              cars.map(car => <Car car={car}></Car>)
          }
        </div>
        </div>
    );
};

export default Home;