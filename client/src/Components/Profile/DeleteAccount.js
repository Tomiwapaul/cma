import React from 'react'
import "./DeleteAccount.css"
import { FaRegArrowAltCircleLeft,FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
const DeleteAccount = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a"><FaUserShield/>Delete Account</div>
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
                    <label htmlFor="password"> Current password</label>
                    <input
                      type="password"
                      id="currpassword"
                      placeholder=" old password"
                    />
                  </div>
                </div>
                <div className="signup-rows">
                  <button type="submit"> Confirm Delete Account</button>
                </div>
              </form>
            </div>
          </div>

          {/* end of edit-page */}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount