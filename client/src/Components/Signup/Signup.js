import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>
      <div className="signup-body">
        <form action="" method="post" className="signup-form-wrapper">
          <div className="signup-rows">
            <label htmlFor="Firstname">Firstname</label>
            <input type="text" id="firstname" placeholder="Firstname" />
          </div>
          <div className="signup-rows">
            <label htmlFor="LastName"> LastName</label>
            <input type="text" id="LastName" placeholder="LastName" />
          </div>
          <div className="signup-rows">
            {/* <label htmlFor="">gender</label> */}
            <span>
              Gender:
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" />
                male
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="male" />
                female
              </label>
            </span>
          </div>

          <div className="signup-rows">
            <label htmlFor="datefbirth"> date of birth</label>
            <input type="date" id="datefbirth" />
          </div>
          <div div className="signup-rows">
            <label htmlFor="country">country</label>
            <select name="" id="country">
              <option value="">country</option>
            </select>
          </div>
          <div div className="signup-rows">
            <label htmlFor="state">state</label>
            <select name="" id="state">
              <option value="">state</option>
            </select>
          </div>
          <div className="signup-rows">
            <label htmlFor="city">city</label>
            <select name="" id="city">
              <option value="">city</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="username"> username</label>
            <input type="text" id="username" placeholder="username" />
          </div>

          <div className="signup-rows">
            <label htmlFor="email"> email</label>
            <input type="email" id="datefbirth" placeholder="email" />
          </div>

          <div className="signup-rows">
            <label htmlFor="phone">phone number</label>
            <input type="tel" id="phone" placeholder="phone number" />
          </div>
          <div className="signup-rows">
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="password" />
          </div>
          <div className="signup-rows">
            <label htmlFor="cpassword">confirm password</label>
            <input type="text" id="cpassword" placeholder="confirm password" />
          </div>
          <div className="signup-rows">
            <label htmlFor="termsandconditions">
              <input
                type="checkbox"
                id="termsandconditions"
                placeholder="phone number"
              />
              by signing up,you have agreed to our terms and conditions
            </label>
          </div>
          <div className="signup-rows">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

      <div className="signup-footer">
        already have an account<Link to="/login">login here</Link>
      </div>
    </div>
  );
};

export default Signup;
