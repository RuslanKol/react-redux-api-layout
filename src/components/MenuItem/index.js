import React from "react";
import { Link } from "react-router-dom";

const MenuItem = props => {
  return (
    <Link to={props.goTo ? props.goTo : "/"} className="menu-item">
      {props.text}
    </Link>
  );
};

export default MenuItem;
