import React from "react";
import { withRouter } from "react-router";
import ScheduleDeliveryModal from "../../components/ScheduleDeliveryModal";
import { ReactComponent as Schedule } from "../../images/land-schedule-icon.svg";
import { ReactComponent as Basket } from "../../images/basket.svg";

class OrderCloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowScheduleDeliveryModal: false
    }
  }
  goToCart = () => {
    this.props.history.push("/cart");
  };

  showScheduleModal = () => {
    this.setState({isShowScheduleDeliveryModal: true})
  }

  render(){

    return (
      <div>
        <div className="order-cloud">
          <div className="order-cloud__schedule" onClick={this.showScheduleModal}>
            <Schedule className="order-cloud__schedule_icon" />
          </div>
          <div className="order-cloud__basket" onClick={this.goToCart}>
            <div className="order-cloud__basket_count">{this.props.quantity}</div>
            <Basket className="order-cloud__basket_icon" />
          </div>
        </div>

        {this.state.isShowScheduleDeliveryModal && (
          <ScheduleDeliveryModal
            close={() => {
              this.setState({
                isShowScheduleDeliveryModal: false
              });
            }}
          />
        )}
      </div>
    );
  }
};

export default withRouter(OrderCloud);
