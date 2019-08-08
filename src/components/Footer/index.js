import React from "react";
import MenuItem from "../MenuItem";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <MenuItem text="Privacy" />
          <MenuItem text="Terms" />
        </div>
        <span>@2018 golaundry</span>
        <MenuItem text="An Umbrella Product" />
      </div>
    </footer>
  );
};

export default Footer;
