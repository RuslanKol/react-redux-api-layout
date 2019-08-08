import React from "react";
import { connect } from "react-redux";
import { getUser, userSignIn } from "../../_actions/user.actions";

import { ReactComponent as CloseImg } from "../../images/delete-button.svg";

class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
  }

  render() {
    return (
      <div className="black-modal">
        <div className="login-modal">
          <div className="login-modal__close" onClick={this.props.close}>
            <CloseImg />
          </div>
          <div className="login-modal__container">
            <div className="login-modal__container_form">
              <div className="login-modal__container_form_container">
                <div className="login-modal__container_form_container_title">
                  Forgot Password
                </div>
                <div className="login-modal__container_form_container_inp-cont">
                  <input
                    ref={this.emailRef}
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <button className="login-btn" onClick={this.loginHandler}>
                  Send
                </button>
                <div className="login-modal__container_form_container_links">
                  <div>
                    <span onClick={this.props.openRegistration}>
                      Log In
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser: getUser,
  userSignIn: userSignIn
};

function mapStateToProps(state) {
  const { user } = state;
  return user;
}

const connectedForgotPass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPass);

export { connectedForgotPass as ForgotPass };
