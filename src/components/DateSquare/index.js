import React from "react";

const DateSquare = props => {
  return (
    <div
      className={`date-item${props.active ? "-active" : ""}`}
      onClick={() => {
        props.select(props.date);
      }}
    >
      <span className="month">{props.month}</span>
      <span className="day">{props.day}</span>
      <span className="week-day">{props.dayOfWeek}</span>
    </div>
  );
};

export default DateSquare;
