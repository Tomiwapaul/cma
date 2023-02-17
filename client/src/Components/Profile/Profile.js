import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./Profile.css";
import userPhoto from '../../assets/images/users/lildurk.jpeg'
import ProfileCol1 from "./ProfileCol1";
import ProfileCol2 from "./ProfileCol2";

const Profile = () => {

 
    
  
  return (
    <div className="Profile-wrapper">
      <ProfileCol1 />
       
      <ProfileCol2 />
    </div>
  );
};

export default Profile;
