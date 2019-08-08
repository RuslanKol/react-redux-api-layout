import React from "react";

const ProfilePriceMenuTab = props => {
  return (
    <div
      className={`profile-prices-menu-tab${props.active ? "-active" : ""}`}
      onClick={props.click}
    >
      <div className="profile-prices-menu-tab__container">
        <div className="profile-prices-menu-tab__container_img">
          {props.icon}
        </div>
        <span className="profile-prices-menu-tab__container_name">
          {props.name}
        </span>
      </div>
    </div>
  );
};

export default ProfilePriceMenuTab;
