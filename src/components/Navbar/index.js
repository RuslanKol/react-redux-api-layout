import React from "react";
import { connect } from "react-redux";

import { LoginModal } from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import UserMenu from "../../components/UserMenu";
import Hamburger from "../../components/Hamburger";
import {userLogOut} from '../../_actions/user.actions';
import Button from "../Button";
import Logo from "../Logo";
import MenuItem from "../MenuItem";

import { ReactComponent as RightArrow } from "../../images/right-arrow.svg";
import { ReactComponent as UserIcon } from "../../images/user-icon.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
      showUserMenu: false,
      showMobMenu: false
    };
  }

  render() {
    const { user, isAuth, logOut } = this.props;

    return (
      <React.Fragment>
          <div className="navbar navbar-violet">
            <div className="navbar-container">
              <div className="navbar-container__logo">
                  <Logo />
              </div>
              <div
                className={
                  "navbar-container__menu" +
                  (this.state.showMobMenu ? " active" : "")
                }
              >
                <div
                  className="navbar-container__menu_items"
                >
                  <MenuItem text="About" goTo="/" />
                  <MenuItem text="Contacts" goTo="/" />
                  <MenuItem text="Features" goTo="/" />
                </div>
                <div>
                {isAuth ? (
                    <div
                      className="navbar-container__user"
                      onClick={() =>
                        this.setState({
                          showUserMenu: !this.state.showUserMenu
                        })
                      }
                    >
                      <div className="navbar-container__user_cont">
                        <span className="navbar-container__user_cont_name">
                          {user.firstName 
                          ? 
                            `${user.firstName} ${user.lastName}`
                          :
                            null
                          }
                        </span>
                        <div className="navbar-container__user_cont_img">
                          <UserIcon />
                        </div>
                      </div>
                      {this.state.showUserMenu && <UserMenu />}
                    </div>
                  ) : (
                    <div className="navbar-container__auth-btn">
                      <div>
                        <Button
                          className="navbar-container__auth-btn_white"
                          onClick={() =>
                            this.setState({
                              showRegister: true
                            })
                          }
                        >
                          Sign up
                        </Button>
                      </div>
                      <div>
                        <Button
                          className="navbar-container__auth-btn_blue"
                          onClick={() =>
                            this.setState({
                              showLogin: true
                            })
                          }
                        >
                          Log in
                          <RightArrow />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="navbar-container__hamburger">
                <Button
                  className="hamburger-btn"
                  onClick={() =>
                    this.setState({ showMobMenu: !this.state.showMobMenu })
                  }
                >
                  <Hamburger isActive={this.state.showMobMenu} />
                </Button>
              </div>
            </div>
          </div>
          <div className="navbar-shadow" />
          {this.state.showLogin && (
            <LoginModal
              close={() =>
                this.setState({
                  showLogin: false
                })
              }
              openRegistration={() => {
                this.setState({ showLogin: false, showRegister: true });
              }}
            />
          )}
          {this.state.showRegister && (
            <RegisterModal
              close={() =>
                this.setState({
                  showRegister: false
                })
              }
              openLogin={() => {
                this.setState({ showLogin: true, showRegister: false });
              }}
            />
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isAuth: state.user.isAuth,
});

const connectedNavbar = connect(
  mapStateToProps,
  null
)(Navbar);

export { connectedNavbar as Navbar };
