import React, { useState } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../images/expand-more.svg";
import { ReactComponent as EditIcon } from "../../images/edit-icon.svg";

const ProfileDropDown = props => {
  let [isOpen, setIsOpen] = useState(props.isOpen);

  return (
    <div
      className={`profile-drop-down ${isOpen ? "profile-dropdown-open" : ""}${
        props.disabled ? " profile-dropdown-disabled" : ""
      }`}
    >
      <div
        className="profile-drop-down_title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="profile-drop-down_title_content">
          <span className="profile-drop-down_title_content_name">
            {props.name}
          </span>
          <div className="profile-drop-down_title_content_expand">
            <ExpandMoreIcon />
          </div>
          {props.editable && (
            <div className="profile-drop-down_title_content_editable">
              <EditIcon />
            </div>
          )}
        </div>
      </div>
      <div className="profile-drop-down_body">{props.children}</div>
    </div>
  );
};

export default ProfileDropDown;
