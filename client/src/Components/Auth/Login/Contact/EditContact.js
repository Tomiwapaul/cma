import React from 'react'
import "./EditContact.css"
const EditContact = () => {
  return (
    <div className="edit-contact-wrapper">
      <h2 className='name-edit'>Edit Contact</h2><br/><br/>
      <div className="edit-grp-1">
        <input type="text" placeholder="first name" />
      </div>
      <br />

      <div className="edit-grp-2">
        <input type="text" placeholder="last name" />
      </div>
      <br />

      <div className="edit-grp-3">
        <input type="text" placeholder="phone" />
      </div>
      <br />

      <div className="edit-grp-4">
        <input type="email" placeholder="email" />
      </div>
      <br />

      <div className="edit-rows">
        <button type="submit">Update Contact</button>
      </div>
    </div>
  );
}

export default EditContact