import React from "react";

const ProfileTab = props => {
  return (
    <div
      className={`profile-tab${props.isActive ? "-active" : ""}`}
      onClick={() => {
        props.click();
      }}
    >
      <span className="name">{props.name}</span>
      <div className="line" />
    </div>
  );
};

export default ProfileTab;
