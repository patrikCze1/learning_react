import React from "react";
import { deleteProfile } from "../../actions/profileActions";

export default function ProfileListItem({
  firstName,
  lastName,
  age,
  about,
  tel,
  id,
  dispatch
}) {
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{firstName} {lastName} ({age})</span>
          <p>
            {about}
          </p>
          
        </div>
        <p className='grey-text text-darken-1' style={{marginLeft: 24, marginTop: 5, marginBottom: 5}}>Tel: {tel}</p>
        <div className="card-action">
          <button className='pink darken-2 btn waves-effect waves-light' onClick={() => dispatch(deleteProfile(id))}>Delete</button>
        </div>
      </div>
    </div>
  );
}
