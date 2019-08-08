import React from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";

import { 
  getUser, 
  userChangeEmail, 
  getUserAddresses, 
  setUserDefaultAddress,
  getUserProfile,
  updateProfile,
  changeUserPassword,
} from "../../_actions/user.actions";

import SettingsContactUs from './ContactUs';
import AddressTab from './Address';
import ProfileTab from './Profile';
import ChangePassword from './ChangePassword'

import { ReactComponent as TriangleArrow } from "../../images/triangle-arrow.svg";
import { ReactComponent as TriangleArrowActive } from "../../images/triangle-arrow-active.svg";

const settingsMap = [
  {
    id: 1,
    name: "Edit Profile"
  },
  {
    id: 2,
    name: "Account Settings",
    submenu: [
      {
        id: 1,
        name: "Change Email "
      },
      {
        id: 2,
        name: "Change Password "
      },
      {
        id: 3,
        name: "Deactivate Account  "
      },
      {
        id: 4,
        name: "Logout "
      }
    ]
  },
  {
    id: 3,
    name: "Saved Address"
  },
  {
    id: 4,
    name: "Card Details"
  },
  {
    id: 5,
    name: "Rate Us"
  },
  {
    id: 6,
    name: "Contact Us"
  }
];
const lang = {
  ENG: "English",
  ARAB: "arabic"
};

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSettingID: 1,
      activeSettingSubMenu: 1,
      selectedLang: lang.ENG,
      isNotifed: true,
      isNewsletter: true,
    };
    this.newEmailRef = React.createRef();
    this.repeatNewEmailRef = React.createRef();
    this.setDefaultAddress = this.setDefaultAddress.bind(this);
  }

  componentDidMount() {
    this.props.getUserAddresses();
    this.props.getUserProfile(this.props.user.userId);
  }

  handleChangeEmail = () => {
    const emailRef = this.newEmailRef.current.value;
    const repeatRef = this.repeatNewEmailRef.current.value;
    if(repeatRef !== emailRef) {
      this.setState({newEmailMatch: 'Emails do not match'});
    } else {
      this.props.changeEmail(emailRef);
    }
  }

  handleUpdateProfile = (firstName, lastName, mobile) => {
    this.props.updateProfile(firstName, lastName, mobile, this.props.user.userId, this.props.user.userName);
  }

  handleChangePassword = (currentPass, newPass) => {
    this.props.changeUserPassword(currentPass, newPass);
  }

  setDefaultAddress = id => {
    this.props.setDefaultAddress(id);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="app bg-pink">
        <div className="account-settings">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Settings
                </span>
              </div>
            </div>
            {user.userId &&
              settingsMap.map(setting => {
                return (
                  <React.Fragment key={setting.id}>
                    <div
                      className="account-settings__sidebar-item"
                      onClick={() =>
                        this.setState({
                          activeSettingID: setting.id
                        })
                      }
                    >
                      <div className="account-settings__sidebar-item_cont">
                        <span className="account-settings__sidebar-item_cont_title">
                          {setting.name}
                        </span>
                        <div
                          className={`account-settings__sidebar-item_cont_arrow-${
                            setting.submenu &&
                            setting.id !== this.state.activeSettingID
                              ? "top"
                              : "right"
                          }`}
                        >
                          {setting.id === this.state.activeSettingID ? (
                            <TriangleArrowActive />
                          ) : (
                            <TriangleArrow />
                          )}
                        </div>
                      </div>
                    </div>
                    {setting.submenu &&
                      setting.id === this.state.activeSettingID &&
                      setting.submenu.map(subsetting => {
                        return (
                          <div
                            className="account-settings__sidebar-item"
                            onClick={() =>
                              this.setState({
                                activeSettingSubMenu: subsetting.id
                              })
                            }
                            key={subsetting.id}
                          >
                            <div className="account-settings__sidebar-item_cont">
                              <span className="account-settings__sidebar-item_cont_title">
                                {subsetting.name}
                              </span>
                              <div
                                className={`account-settings__sidebar-item_cont_arrow-${
                                  subsetting.submenu ? "top" : "right"
                                }`}
                              >
                                {subsetting.id ===
                                this.state.activeSettingSubMenu ? (
                                  <TriangleArrowActive />
                                ) : (
                                  <TriangleArrow />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </React.Fragment>
                );
              })}
            <div className="account-settings__sidebar-item">
              <div className="account-settings__sidebar-item_cont">
                <div className="account-settings__sidebar-item_cont_lang">
                  <span className="account-settings__sidebar-item_cont_title">
                    Language
                  </span>
                  <div className="radio-select-lang">
                    <div
                      className="radio-select"
                      onClick={() =>
                        this.setState({
                          selectedLang: lang.ENG
                        })
                      }
                    >
                      <div
                        className={`radio-select_circle${
                          this.state.selectedLang === lang.ENG ? "-active" : ""
                        }`}
                      />
                      <span className="radio-select_text">English</span>
                    </div>
                    <div
                      className="radio-select"
                      onClick={() =>
                        this.setState({
                          selectedLang: lang.ARAB
                        })
                      }
                    >
                      <span className="radio-select_text">arabic</span>
                      <div
                        className={`radio-select_circle${
                          this.state.selectedLang === lang.ARAB ? "-active" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-settings__sidebar-item">
              <div className="account-settings__sidebar-item_cont">
                <span className="account-settings__sidebar-item_cont_title">
                  Get Me Notified
                </span>
                {this.state.isNotifed ? (
                  <div
                    className="account-settings__sidebar-item_cont_checkbox-active"
                    onClick={() =>
                      this.setState({
                        isNotifed: !this.state.isNotifed
                      })
                    }
                  >
                    <div className="account-settings__sidebar-item_cont_checkbox-active_circle" />
                  </div>
                ) : (
                  <div
                    className="account-settings__sidebar-item_cont_checkbox"
                    onClick={() =>
                      this.setState({
                        isNotifed: !this.state.isNotifed
                      })
                    }
                  >
                    <div className="account-settings__sidebar-item_cont_checkbox_circle" />
                  </div>
                )}
              </div>
            </div>
            <div className="account-settings__sidebar-item">
              <div className="account-settings__sidebar-item_cont">
                <span className="account-settings__sidebar-item_cont_title">
                  Newsletter
                </span>
                {this.state.isNewsletter ? (
                  <div
                    className="account-settings__sidebar-item_cont_checkbox-active"
                    onClick={() =>
                      this.setState({
                        isNewsletter: !this.state.isNewsletter
                      })
                    }
                  >
                    <div className="account-settings__sidebar-item_cont_checkbox-active_circle" />
                  </div>
                ) : (
                  <div
                    className="account-settings__sidebar-item_cont_checkbox"
                    onClick={() =>
                      this.setState({
                        isNewsletter: !this.state.isNewsletter
                      })
                    }
                  >
                    <div className="account-settings__sidebar-item_cont_checkbox_circle" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="account-settings__main">
            <div className="account-settings__main_cont">
              {(() => {
                switch (this.state.activeSettingID) {
                  case 1: {
                    return (
                      <ProfileTab 
                        user={user}
                        handleUpdateProfile={(firstName, lastName, mobile) => this.handleUpdateProfile(firstName, lastName, mobile)}
                      />
                    );
                  }
                  case 2: {
                    switch (this.state.activeSettingSubMenu) {
                      case 1: {
                        return (
                          <div className="account-settings__main_cont_edit-block">
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="email">Email</label>
                              <input
                                id="email"
                                type="email"
                                placeholder="Enter your current email"
                              />
                            </div>
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="email">New Email</label>
                              <input
                                ref={this.newEmailRef}
                                id="email"
                                type="email"
                                placeholder="Enter your new email"
                              />
                            </div>
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="email">Confirm New Email</label>
                              <input
                                ref={this.repeatNewEmailRef}
                                id="email"
                                type="email"
                                placeholder="Confirm new email"
                              />
                            </div>
                            <button className="account-settings__main_cont_save" onClick={this.handleChangeEmail}>
                              change
                            </button>
                            {this.state.newEmailMatch ? <p>{this.state.newEmailMatch}</p> : null}
                          </div>
                        );
                      }
                      case 2: {
                        return (
                          <ChangePassword 
                            handleChangePassword = {(currentPass, newPass) => this.handleChangePassword(currentPass, newPass)}
                          />
                        );
                      }
                      case 3: {
                        return (
                          <div className="account-settings__main_cont_edit-block">
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="password">Password</label>
                              <input
                                id="password"
                                type="password"
                                placeholder="Enter your current password"
                              />
                            </div>
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="new_password">New Password</label>
                              <input
                                id="new_password"
                                type="password"
                                placeholder="Enter your new password"
                              />
                            </div>
                            <div className="account-settings__main_cont_edit-block_input">
                              <label htmlFor="confirm_new_password">
                                Confirm New Password
                              </label>
                              <input
                                id="confirm_new_password"
                                type="password"
                                placeholder="Confirm new password"
                              />
                            </div>
                            <button className="account-settings__main_cont_save">
                              change
                            </button>
                          </div>
                        );
                      }
                      default: {
                        return null;
                      }
                    }
                  }
                  case 3: {
                    return (
                      <AddressTab
                        setDefaultAddress={id => this.setDefaultAddress(id)}
                        address={user.address}
                      />
                    );
                  }
                  case 4: {
                    return (
                      <p>123</p>
                    )
                  }
                  case 5: {
                    return (
                      <p>Rate Us</p>
                    )
                  }
                  case 6: {
                    return (
                      <SettingsContactUs />
                    )
                  }
                  default: {
                    return null;
                  }
                }
              })()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser: getUser,
  changeEmail: userChangeEmail,
  getUserAddresses: getUserAddresses,
  setDefaultAddress: setUserDefaultAddress,
  getUserProfile: getUserProfile,
  updateProfile: updateProfile,
  changeUserPassword: changeUserPassword,
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const connectedAccountSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);

export { connectedAccountSettings as AccountSettings };
