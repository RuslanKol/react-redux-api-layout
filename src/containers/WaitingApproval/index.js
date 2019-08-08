import React from "react";

import { ReactComponent as ApprovalSvg} from "../../images/approval.svg";

class WaitingApproval extends React.Component {

  // const goToOrders = () => {
  //   props.history.push("/list");
  // };

  render() {
    return (
      <div className="waiting-approval">
        <div className="waiting-approval__container">
            <React.Fragment>
              <div className="waiting-approval__container_image">
                <ApprovalSvg />
              </div>
              <div className="waiting-approval__container_info">
                <p>We are reviewing<br />Please try after sometime !</p>
              </div>
              <div className="waiting-approval__container_btns">
                <button
                  className="waiting-approval__container_btns_back"
                >
                  go back
                </button>
                <button
                  className="waiting-approval__container_btns_login"
                >
                  Login
                </button>
              </div>
              
            </React.Fragment>
        </div>
      </div>
    );
  }
};

export default WaitingApproval;
