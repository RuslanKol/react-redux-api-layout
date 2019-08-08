import React from "react";

const LandingPresentBlock = props => {
  return (
    <div className="landing-present-block">
      {props.image}
      <span>{props.text}</span>
    </div>
  );
};

export default LandingPresentBlock;
