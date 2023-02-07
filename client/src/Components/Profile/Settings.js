import React from 'react'
import "./Settings.css";
import { FaRegArrowAltCircleLeft, FaUserEdit,FaWrench, FaUserLock, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Profile from './Profile'

const Settings = () => {

    return (
      <div className="page-wrapper">
        <div className="page-section">
          <div className="page-row-1">
            <div className="page-row-1-a"><FaWrench/>Settings</div>
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
                <div className="edit-profile-row-1">profile</div>
                <div className="edit-profile-row-2">
                  <Link to="/profile/edit">
                    <FaUserEdit className='settings-icon-grp'/>
                  </Link>
                </div>
                <div className="edit-profile-row-3">
                  <Link to="/profile/edit">Update profile</Link>
                </div>
              </div>
              <div className="settings-col-2 change-profile-col">
                <div className="change-profile-row-1">password</div>
                <div className="change-profile-row-2">
                  <Link to="/profile/delete-account">
                    <FaUserShield className="settings-icon-grp" />
                  </Link>
                </div>
                <div className="change-profile-row-3">
                  <Link to="/profile/change-password"> Change password</Link>
                </div>
              </div>
              <div className="settings-col-3 delete-acccount-col">
                <div className="delete-profile-row-1">account</div>
                <div className="delete-profile-row-2">
                  <Link to="/profile/delete-account">
                    <FaUserShield className="settings-icon-grp" />
                  </Link>
                </div>
                <div className="delete-profile-row-3">
                  <Link to="/profile/delete-account">Delete account</Link>
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