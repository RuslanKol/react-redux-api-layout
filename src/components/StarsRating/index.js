import React from "react";
import { ReactComponent as Star } from "../../images/star.svg";

const StarsRating = props => {
  let stars = [];
  for (let star = 0; star < props.stars; star++) {
    stars.push(<Star className="star-gold" key={star} />);
  }
  for (let star = stars.length; star < 5; star++) {
    stars.push(<Star className="star-gray" key={star} />);
  }
  return (
    <div className="stars-rating">
      {stars.map(star => {
        return star;
      })}
    </div>
  );
};

export default StarsRating;
