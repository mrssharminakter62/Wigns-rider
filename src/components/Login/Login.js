import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFamework, handleSignOut, handleFbSignIn, createUserWithinEmailAndPassword, signInWithEmailAndPassword} from './LoginManager';
import './Login.css'


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    photo:'',
  });

  initializeLoginFamework();
  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location =useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
const googleSignIn = () => {
  handleGoogleSignIn()
  .then(res => {
    handleResponse(res, true)
    })
}

const fbSignIn = () =>{
  handleFbSignIn()
  .then(res =>{
    handleResponse(res, true)
  })
}
const signOut =() => {
handleSignOut()
.then(res =>{
  handleResponse(res, false)
})
}
const handleResponse = (res, redirect) =>{
  setUser(res);
  setLoggedInUser(res);
  if(redirect){
    history.replace(from);
  }
}
  const handleBlur = (e) => {
   let isFieldValid = true;
    if(e.target.name === 'email'){  
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber =/\d{1}/.test(e.target.value);
    isFieldValid =isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithinEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true)
      })
    }

 if(!newUser && user.email && user.password){
   signInWithEmailAndPassword(user.email, user.password)
   .then(res =>{
    handleResponse(res, true)
   })
    }
      e.preventDefault();
  }

  return (
    <div style={{textAlign:'center'}}>
   
    {
      user.isSignedIn && <div>
         <p>welcome,{user.name}</p>
         <p>Your email{user.email}</p>
         <img src={user.photo} alt=""/>
         </div>
    }
    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">New User Sign Up</label>
    <form onSubmit={handleSubmit}>
    {newUser && <input name="name" type="text" className="input-style" onBlur={handleBlur} placeholder="Your name"/>}
     <br/>
    <input type="text" onBlur={handleBlur} name="email" className="input-style"  placeholder="Your Email address" required/>
    <br/>
    <input type="password" onBlur={handleBlur} className="input-style" name="password" placeholder="Your Password" required/>
    <br/>
   <input type="submit" className="input-style" value={newUser ? 'Sign Up' : 'Sign In'}/>
    </form>
    <p style={{color:'red'}}>{user.error}</p>
    {
      user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In ' }successfully</p>
    }
    <h3>Or</h3>
     {
     user.isSignedIn ? <button onClick={signOut} >Sign out</button>:
    <button onClick={googleSignIn} className="google" > Sign  in  using Google </button>
    }
   <br/>
   <button onClick={fbSignIn} className="facebook" >Sign in using Facebook</button>
    </div>
  
  );
}

export default Login;
