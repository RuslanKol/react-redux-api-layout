import React from "react";
import { withRouter } from "react-router";
import Footer from '../../components/Footer';

import { ReactComponent as SuccessImg } from "../../images/checked.svg";

const OrderSuccess = props => {
  const goToOrders = () => {
    props.history.push("/orders");
  };

  return (
    <div>
        <div className="order-result">
            <div className="order-result__container">
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
                
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default withRouter(OrderSuccess);
