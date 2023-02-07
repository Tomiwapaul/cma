import React from 'react'
import "./ChangePassword"
import { FaRegArrowAltCircleLeft,FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChangePassword = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a"><FaUserEdit/>Change Password</div>
          <div className="page-row-1-b">
            <Link to="/profile/Settings">
              <FaRegArrowAltCircleLeft className="remove-padd" /> Back
            </Link>
          </div>
        </div>
        <div className="page-row-2">
          {/* start of edit-page */}

          <div className="edit-profile-wrapper">
            <div className="signup-body">
              <form action="" method="post" className="signup-form-wrapper">
                <div className="signup-rows">
                  <div className="signup-rows">
                    <label htmlFor="password"> old password</label>
                    <input type="password" id="oldpassword" placeholder=" old password" />
                  </div>
                  <div className="signup-rows">
                    <label htmlFor="password"> new password</label>
                    <input type="password" id="password" placeholder="new password" />
                  </div>
                  <div className="signup-rows">
                    <label htmlFor="cpassword">confirm password</label>
                    <input
                      type="password"
                      id="cpassword"
                      placeholder="confirm password"
                    />
                  </div>
                </div>
                <div className="signup-rows">
                  <button type="submit">Update password</button>
                </div>
              </form>
            </div>
          </div>

          {/* end of edit-page */}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword