import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-heading">login</div>
      <div className="login-body">
              <form action="" method="post" className="login-form-wrapper">
                  
        
         

          <div className="login-rows">
            <label htmlFor="email"> email</label>
            <input type="email" id="datefbirth" placeholder="email" />
          </div>

          <div className="login-rows">
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="password" />
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