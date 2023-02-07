import React from 'react'
import "./Settings.css";
import { FaRegArrowAltCircleLeft, FaUserEdit, FaUserLock, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from './Profile'

const Settings = () => {

    return (
      <div className="page-wrapper">
        <div className="page-section">
          <div className="page-row-1">
            <div className="page-row-1-a">Settings</div>
            <div className="page-row-1-b">
              <Link to="/profile">
                <FaRegArrowAltCircleLeft className="remove-padd" /> Back
              </Link>
            </div>
          </div>
          <div className="page-row-2">
            {/* start of settings */}
            <div className="settings-wrapper">
              <div className="settings-col-1 edit-profile-col">
                <div className="edit-profile-row-1">
                  <span>profile</span>
                </div>
                <div className="edit-profile-row-2">
                  <div className="search-icon-grp">
                    <FaUserEdit />
                  </div>
                </div>
                <div className="edit-profile-row-3">
                  <Link to="/profile/edit">
                    <button>Update profile</button>
                  </Link>
                </div>
              </div>
              <div className="settings-col-2 change-profile-col">
                <div className="change-profile-row-1"><span>passwrd</span></div>
                <div className="change-profile-row-2">
                  <div className="search-icon-grp">
                    <FaUserLock />
                  </div>
                </div>
                <Link to="/profile/change-password">
                  <button> Change password</button>
                </Link>
              </div>
              <div className="settings-col-3 delete-acccount-col">
                <div className="delete-profile-row-1"><span>account</span></div>
                <div className="delete-profile-row-2">
                  <div className="search-icon-grp">
                    <FaUserShield />
                  </div>
                </div>
                <div className="delete-profile-row-3">
                  <Link to="/profile/delete-account">
                    <button>Delete account</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* end of settings */}
          </div>
        </div>
      </div>
    );
};



export default Settings