import React from 'react';
import StartRating from '../StarsRating';

const ReviewsItem = props => {
    return (
        <div>
            {props.reviewHide === "false"
            ?   
                <div className="review-item">
                    <div className="review-item_left">
                        <p className="review-item_left_user-name">{props.userName}</p>
                        <StartRating stars={props.stars} />
                        <p className="review-item_left_user-desc">{props.description}</p>
                    </div>
                    <div className="review-item_right">
                        <p className="review-item_right_date">{props.date}</p>
                    </div>
                </div>
            : null
            }
        </div>
    )
}

export default ReviewsItem;