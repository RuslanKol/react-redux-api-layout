import React from "react";

const TimeSquare = props => {
  return (
    <div
      className={`time-item${props.active ? "-active" : ""}`}
      onClick={() => {
        props.selectTime(props.time);
      }}
    >
      <span className="time">{`${props.start} - ${props.end}`}</span>
    </div>
  );
};

export default TimeSquare;
