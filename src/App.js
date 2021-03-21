import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>  
  <Router> 
    <Header></Header>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/destination">
            <Destination></Destination>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
           <NoMatch></NoMatch>
        </Route>
      </Switch>
 </Router>
 </UserContext.Provider>
  );
}

export default App;
