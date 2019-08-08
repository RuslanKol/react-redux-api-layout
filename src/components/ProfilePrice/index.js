import React from "react";

const ProfilePrice = props => {
  return (
    <React.Fragment>
          <div className="profile-price">
            <div className="profile-price__container">
              <span className="profile-price__container_name">
                {props.name}
              </span>
              <span className="profile-price__container_time">
                QAR {props.price}
              </span>
            </div>
          </div>
    </React.Fragment>
  );
};

export default ProfilePrice;
