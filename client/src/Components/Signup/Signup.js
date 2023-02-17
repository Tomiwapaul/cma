import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading]= useState(true)
  const [success, setSuccess] = useState(null);
  const handleSignUp = async(e) => {
    e.preventDefault();

    if (password !== cPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const response = await axios.post('localhost://5000/api/users/register',{
    firstName: firstName,
    lastName:lastName,
    state:state,
    city:city, 
    email:email,
    password:password, 
      });
      setSuccess(response.data.message)
    } catch (error) {

    }
  }
  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>
      {error}
      <div className="signup-body">
        <form action="" method="post" className="signup-form-wrapper" onSubmit={handleSignUp}>
          <div className="signup-rows">
            <label htmlFor="Firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              placeholder="Firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="LastName"> LastName</label>
            <input
              type="text"
              id="LastName"
              placeholder="LastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* <div className="signup-rows">
            {/* <label htmlFor="">gender</label> */}
          {/* <span>
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
          </div> */}

          {/* <div className="signup-rows">
            <label htmlFor="datefbirth"> date of birth</label>
            <input type="date" id="datefbirth" />
          </div> */}
          {/* <div div className="signup-rows">
            <label htmlFor="country">country</label>
            <input type="text" id="country" placeholder="country" />
          </div> */}
          <div div className="signup-rows">
            <label htmlFor="state">state</label>
            <input
              type="text"
              id="state"
              placeholder="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="email"> email</label>
            <input
              type="email"
              id="datefbirth"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* <div className="signup-rows">
            <label htmlFor="phone">phone number</label>
            <input type="tel" id="phone" placeholder="phone number" />
          </div> */}
          <div className="signup-rows">
            <label htmlFor="password">password</label>
            <input
              type="text"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="cpassword">confirm password</label>
            <input
              type="text"
              id="cpassword"
              placeholder="confirm password"
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="termsandconditions">
              <input
                type="checkbox"
                id="termsandconditions"
                placeholder="phone number"
                required
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
