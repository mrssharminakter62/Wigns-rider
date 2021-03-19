import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
        <Navbar  bg="dark" variant="dark">
            <Navbar.Brand >Wings Rider</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link to="/home" className= "link">Home</Link>
                    <Link to="/destination" className= "link">Destination</Link>
                    <Link to="/contact" className= "link">Contact</Link>
                    <Link className="btn-book link" to="/login">Login</Link>
                <button className="sign-out link"> Sign out</button>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>
            
    
    );
};

export default Header;