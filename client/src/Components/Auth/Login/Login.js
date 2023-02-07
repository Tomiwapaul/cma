import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  
  const HandleLogin = (e) => {
    e.preventDefault();
    console.log("starting login -------------")
 
    //validation
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);


    //authentication
    //fake user details provided by server
    const userDetails = {
      id: 2,
      email: 'ayotomiwa@gmail.com',
      password: "123"
    }
    // if credentials match
    if (email === userDetails.email && password === userDetails.password) {
    //redirect to profile page
      navigate(`/profile/${userDetails.id}`);
    } else {
      //if credentials dont work,redirect to  profile page
      setError(`incorrect details`)
      navigate( `/login`)
}
  };
  return (
    <div className="login-wrapper">
      <div className="login-heading">login</div>
      <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
      <div className="login-body">
        <form action="" method="post" className="login-form-wrapper"
          onSubmit={HandleLogin }
        >
                  
        
         

          <div className="login-rows">
            <label htmlFor="email"> email</label>
            <input type="email" id="datefbirth" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="login-rows">
            <label htmlFor="password">password</label>
            <input type="password" id="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          
          
          <div className="login-rows">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <div className="login-footer">
        dont have an account? &nbsp; <Link to="/signup">Create Account</Link>
      </div>
    </div>
  );
}

export default Login