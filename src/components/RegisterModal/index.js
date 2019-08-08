import React from "react";
import { connect } from "react-redux";
import { userSignUp } from "../../_actions/user.actions";

import { ReactComponent as CloseImg } from "../../images/delete-button.svg";
import { ReactComponent as InstIcon } from "../../images/inst-icon.svg";

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMale: true,
    }
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.numberRef = React.createRef();
  }

  registerHandler = () => {
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    const number = this.numberRef.current.value;
    // action with login data
    this.props.userSignUp(email, password, number);
    console.log(
      `Email: ${email}. Password: ${password}. Number: ${number}. isMale: ${this.state.isMale}`
    );
  };
  render() {
    return (
      <div className="black-modal">
        <div className="register-modal">
          <div className="register-modal__close" onClick={this.props.close}>
            <CloseImg />
          </div>
          <div className="register-modal__container">
            <div className="register-modal__container_form">
              <div className="register-modal__container_form_container">
                <div className="register-modal__container_form_container_title">
                  Register
                </div>
                <div className="ints-btn">
                  <div className="ints-btn__cont">
                    <div className="ints-btn__cont_icon">
                      <InstIcon />
                    </div>
                    <span className="ints-btn__cont_text">
                      sign up with instagram
                    </span>
                  </div>
                </div>
                <div className="register-modal__container_form_container_or-text">
                  - or using email -
                </div>
                <div className="register-modal__container_form_container_inp-cont">
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
                  <input
                    ref={this.numberRef}
                    type="number"
                    placeholder="Mobile Number"
                  />
                  <form>
                    <span className="register-modal__form-title">I'm a</span>
                    <label>
                      <input
                        type="radio"
                        value="Male"
                        onChange={() => this.setState({isMale: !this.state.isMale})}
                        checked={this.state.isMale}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Female"
                        onChange={() => this.setState({isMale: !this.state.isMale})}
                        checked={!this.state.isMale}
                      />
                      Female
                    </label>
                  </form>
                </div>
                <button className="register-btn" onClick={this.registerHandler}>
                  register
                </button>
                <div className="register-modal__container_form_container_links">
                  <div>
                    Already an user?{" "}
                    <span onClick={this.props.openLogin}>Sign In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

const mapDispatchToProps = {
  userSignUp: userSignUp
};

function mapStateToProps(state) {
  const { user } = state;
  return user;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);

