import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Contact.css'

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
  
    return (
        <div className="address">
            
      <form onSubmit={handleSubmit(onSubmit)} className="form-style">
      <h4>Please give your Address</h4>
      <input name="name" className="input-style" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}
        <br/>
      <input name="email" className="input-style" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">Email is required</span>}
      <br/>
      <input name="address" className="input-style" ref={register({ required: true })} placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}
      <br/>
      <input name="phone" className="input-style" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.name && <span className="error">Phone Number is required</span>}
      <br/>
     <input type="submit" className="input-style input"/>
      </form>
      <div className="form-style">
          <h1 className="contact">CONTACT US</h1>
           <h4>Phone: 0175600003</h4> 
            <h4>Email: saadibneabuakks@gmail.com</h4>
            <h4>Location: New industrial Area, Naples Italy</h4>

      </div>
      </div>
    );
  
};

export default Contact;