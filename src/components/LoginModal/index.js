import React from "react";
import { connect } from "react-redux";
import { getUser, userSignIn } from "../../_actions/user.actions";

import { ReactComponent as CloseImg } from "../../images/delete-button.svg";
import { ReactComponent as InstIcon } from "../../images/inst-icon.svg";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  loginHandler = () => {
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    // action with login data
    // this.props.getUser(email, password);
    this.props.userSignIn("reghushankerr@gmail.com", "Test");
    // this.props.userSignIn(email, password);
    this.props.close();
  };
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
                  Log In
                </div>
                <div className="ints-btn">
                  <div className="ints-btn__cont">
                    <div className="ints-btn__cont_icon">
                      <InstIcon />
                    </div>
                    <span className="ints-btn__cont_text">
                      login with instagram
                    </span>
                  </div>
                </div>
                <div className="login-modal__container_form_container_or-text">
                  - or using email -
                </div>
                <div className="login-modal__container_form_container_inp-cont">
                  <input
                    ref={this.emailRef}
                    type="email"
                    placeholder="Email Address"
                  />
                  <input
                    ref={this.passwordRef}
                    type="password"
                    placeholder="Choose Password"
                  />
                </div>
                <button className="login-btn" onClick={this.loginHandler}>
                  Log in
                </button>
                <div className="login-modal__container_form_container_links">
                  <span onClick={this.props.openForgotPass}>Forgot password</span>
                  <div>
                    New to Go Laundry?{" "}
                    <span onClick={this.props.openRegistration}>
                      Create Account
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

const connectedLoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export { connectedLoginModal as LoginModal };
