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


function App() {
  return ( 
  <Router> 
    <Header></Header>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/destination">
            <Destination></Destination>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
      
        </Route>
        <Route path="/*">
           <NoMatch></NoMatch>
        </Route>
      </Switch>
 </Router>
  );
}

export default App;
