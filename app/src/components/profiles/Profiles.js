import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import ProfileListItem from "./ProfileListItem";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "../../actions/profileActions";

function Profiles() {
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const profiles = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Profiles</h1>

      <div className="switch">
        <label>
          Show form
          <input
            type="checkbox"
            onChange={() => setIsFormVisible(!isFormVisible)}
          />
          <span className="lever"></span>
        </label>
      </div>

      {isFormVisible ? <ProfileForm /> : ""}

      <div className="row">
        {profiles.map((profile, index) => (
          <ProfileListItem key={index} {...profile} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default Profiles;
