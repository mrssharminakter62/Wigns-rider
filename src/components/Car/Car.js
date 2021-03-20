import React from 'react';
import { Card } from 'react-bootstrap';
import './Car.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';

const Car = (props) => {
    const {image, name} = props.car;
    const history = useHistory();

const handleCheckOut = ()=>{
  history.push('/destination')
}

    return (
        <Link to= "/login" onClick={handleCheckOut}>
        <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {image} />
        <Card.Body className="fw-bold text-center text-dark" >
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card> 
    </Link>
    );
};

export default Car;