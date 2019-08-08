import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../images/logo.svg";

const Logo = props => {
  return (
    <div className="logo">
      <React.Fragment>
        <Link to="/">
          <LogoImg />
          <span className="logo__text">Go Laundry</span>
        </Link>
      </React.Fragment>
    </div>
  );
};

export default Logo;
