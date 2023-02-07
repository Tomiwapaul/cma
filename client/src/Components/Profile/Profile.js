import React from "react";
import "./Profile.css";
import userPhoto from '../../assets/images/users/lildurk.jpeg'


import ProfileCol1 from "./ProfileCol1";
import ProfileCol2 from "./ProfileCol2";
// import fakeUsers from "./FakeUsers";
// import fakeContacts from "./FakeContacts";
const Profile = () => {

 
    
  
  return (
    <div className="Profile-wrapper">
      <ProfileCol1 userPhoto={userPhoto} />
       
      <ProfileCol2 />
    </div>
  );
};

export default Profile;
