import React from "react";
import "./Profile.css";
import userPhoto from '../../assets/images/users/lildurk.jpeg'
import { Link } from "react-router-dom";
import {FaSearchLocation } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="Profile-wrapper">
      <div className="profile-col-1">
        <div className="profile-col-1-sub-1">
          <div className="profile-photo-round">
            <img src={userPhoto} alt="User" />
          </div>
        </div>
        <div className="profile-col-1-sub-2">
          first last becky lynch cadi in miani u be going no wharee
        </div>
        <div className="profile-col-1-sub-3">last seen 2/2/2023 03-31-57</div>
        <div className="profile-col-1-sub-4">
          <Link to="/profile/settings">settings</Link>
          <Link to="">Logout</Link>
        </div>
      </div>
      <div className="profile-col-2">
        <div className="profile-col-2-sub-1">
          <div className="search-box">
            <form action="" method="get">
              <span className="search-box-grp">
                <FaSearchLocation className="search-icon" />
                <input
                  type="search"
                  placeholder="search contact
              "
                />
              </span>
            </form>
          </div>
          <div className="number-of-contact-box">108 contact</div>
                  <div className="add-contact-box">
                      <Link to="/add-contact">Add Contact</Link>
          </div>
        </div>
        <div className="profile-col-2-sub-2">
          <div className="contact-box">
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">edit-btn</div>
              <div className="delete-btn">delete-btn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
