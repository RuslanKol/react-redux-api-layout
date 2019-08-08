import React from "react";
import { withRouter } from "react-router";

import { ReactComponent as SuccessImg } from "../../images/checked.svg";
import { ReactComponent as ErrorImg } from "../../images/sad.svg";

const OrderResult = props => {
  const goToOrders = () => {
    props.history.push("/orders");
  };

  return (
    <div className="order-result">
      <div className="order-result__container">
        {!props.error ? (
          <React.Fragment>
            <div className="order-result__container_info">
              order placed
              <span className="order-result__container_info_result-success">
                successfully
              </span>
            </div>
            <div className="order-result__container_image">
              <SuccessImg />
            </div>
            <div className="order-result__container_order-info">
              order id
              <span className="order-result__container_order-info_id">
                {props.itemID}
              </span>
            </div>
            <button
              className="order-result__container_btn"
              onClick={goToOrders}
            >
              view orders
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="order-result__container_info">
              order was
              <span className="order-result__container_info_result-error">
                failure
              </span>
            </div>
            <div className="order-result__container_image">
              <ErrorImg />
            </div>
            <div className="order-result__container_order-info">
              please try <br /> again
            </div>
            <button
              className="order-result__container_btn"
              onClick={goToOrders}
            >
              new order
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default withRouter(OrderResult);
