import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <Navbar  bg="primary" variant="primary">
            <Navbar.Brand className="wing">Wings Rider</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link to="/home" className= "link">Home</Link>
                    <Link to="/destination" className= "link">Destination</Link>
                    <Link to="/contact" className= "link">Contact</Link>
                    <Link className="btn-book link" to="/login">Login</Link>
                <button onClick ={() => setLoggedInUser({})} className="sign-out link"> Sign out</button>
                <p className="wing">{loggedInUser.name}</p>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>
            
    
    );
};

export default Header;