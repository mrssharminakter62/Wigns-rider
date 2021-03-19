import React from 'react';
import carData from '../../data/data.json' 
import { useEffect } from 'react';
import { useState } from 'react';
import Car from '../Car/Car';




const Home = () => {

    const [cars, setCars] = useState([]);
    useEffect(() =>{setCars(carData)},[]);

    return (
        <div>
          {
              cars.map(car => <Car car={car}></Car>)
          }
        </div>
    );
};

export default Home;