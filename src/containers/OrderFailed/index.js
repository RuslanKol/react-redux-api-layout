import React from "react";
import { withRouter } from "react-router";
import Footer from '../../components/Footer';

import { ReactComponent as ErrorImg } from "../../images/sad.svg";

const OrderFailed = props => {
  const goToOrders = () => {
    props.history.push("/orders");
  };

  return (
    <div>
        <div className="order-result">
            <div className="order-result__container">
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
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default withRouter(OrderFailed);
