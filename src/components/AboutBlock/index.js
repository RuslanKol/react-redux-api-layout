import React from "react";

const AboutBlock = props => {
  return (
    <div className="about-block">
      {props.image}
      <span>{props.text}</span>
    </div>
  );
};

export default AboutBlock;
