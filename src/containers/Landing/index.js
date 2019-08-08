import React from "react";

import { connect } from "react-redux";

import { getAreas } from '../../_actions/area.actions';
import RegisterModal from "../../components/RegisterModal";

import IconInput from "../../components/IconInput";
import Button from "../../components/Button";
import LandingPresentBlock from "../../components/LandingPresentBlock";
import Slider from "../../components/Slider";
import AboutBlock from "../../components/AboutBlock";
import MenuItem from "../../components/MenuItem";
import Footer from "../../components/Footer";
import ScheduleDeliveryModal from "../../components/ScheduleDeliveryModal";
import AreaDropdown from '../../components/AreaDropdown';

import { Link } from "react-router-dom";

import { ReactComponent as LandBlImg1 } from "../../images/lanBlImg1.svg";
import { ReactComponent as LandBlImg2 } from "../../images/lanBlImg2.svg";
import { ReactComponent as LandBlImg3 } from "../../images/lanBlImg3.svg";

import landSchIcon from "../../images/land-schedule-icon.svg";
import landLocIcon from "../../images/land-location-icon.svg";

import AppleIcon from "../../images/apple-icon.svg";
import AndroidIcon from "../../images/android-icon.svg";

import RightArrow from "../../images/right-arrow.svg";

import Spot from "../../images/spot.svg";

import AboutImg from "../../images/about.svg";

import { ReactComponent as AboutBlockImg1 } from "../../images/about-block-img1.svg";
import { ReactComponent as AboutBlockImg2 } from "../../images/about-block-img2.svg";

import DownloadPhone1 from "../../images/download-phone1.png";
import { LoginModal } from "../../components/LoginModal";
import { ForgotPass } from "../../components/ForgotPass";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowScheduleDeliveryModal: false,
      isShowAreas: false,
      showLogin: false,
      forgotPass: false,
      areaValue: '',
    };
    this.selectAreaHandler = this.selectAreaHandler.bind(this);
  }

  showScheduleDeliveryModal = () => {
    this.setState({
      isShowScheduleDeliveryModal: !this.state.isShowScheduleDeliveryModal
    });
  };

  searchAreaChangeHandler = value => {
    console.log("schedule: " + value);
  };

  sheduleChangeHandler = value => {
    console.log("search: " + value);
  };

  getAreasHandler = () => {
    this.props.getAreas();
    this.setState({isShowAreas: true});
  }

  selectAreaHandler = (inputValue) => {
    this.setState({isShowAreas: false, areaValue: inputValue})
  } 

  handleTest = () => {
    console.log("working");
  }


  render() {
    const { areas, isAuth } = this.props;

    return (
      <div className="app bg-white">
        <section
          className="schedule"
        >
          <div>
            <div className="section-content">
              <h2>
                Late Night?
              </h2>
              <div className="schedule__text" >
                Book laundry near you
              </div>
              <div className="land-icon-block">
                <div className="schedule-btn" >
                  <div
                    className="icon-input"
                    onClick={this.showScheduleDeliveryModal}
                  >
                    <img
                      className="icon-input__icon"
                      src={landSchIcon}
                      alt="icon"
                    />
                    <span className="icon-input__input">
                      Schedule
                    </span>
                  </div>
                </div>
                <div className="location-field">
                  <IconInput
                    icon={landLocIcon}
                    placeholder="Search Your Area"
                    value={this.state.areaValue}
                    onFocus={this.getAreasHandler}
                    onChange={this.searchAreaChangeHandler}
                    inputStyle={{
                      width: "283px"
                    }}
                  />
                  {isAuth
                  ?
                    <AreaDropdown 
                      areaClick={this.selectAreaHandler}
                      isShowAreas={this.state.isShowAreas}
                      areas={areas}
                    />
                  : null
                  }
                  
                </div>
                {isAuth 
                ?
                  <Link
                    to={{
                      pathname: "/list", 
                      state: {
                        areaValue: this.state.areaValue
                      }
                    }} 
                    className="navbar-container__auth-btn_blue find-btn to-uprc"
                  >
                    find laundry
                  </Link>
                :
                  <Button
                    onClick={() => this.setState({showLogin: true})}
                    className="navbar-container__auth-btn_blue find-btn to-uprc"
                  >
                    find laundry
                  </Button>
                }
                
              </div>
            </div>
          </div>
        </section>
        <section className="the-best">
          <div>
            <h2 className="to-uprc">
              why we are the best
            </h2>
            <div className="description" >
              Order for yourself or for the group, with no restrict on order
              value
            </div>
          </div>
        </section>
        <section className="benefits">
          <div>
            <LandingPresentBlock image={<LandBlImg1 />} text="Washed" />
            <LandingPresentBlock image={<LandBlImg2 />} text="Ironed" />
            <LandingPresentBlock image={<LandBlImg3 />} text="Drycleaned" />
          </div>
        </section>
        <section className="see-more">
          <div className="see-more__cont">
            <div
              className="see-more__cont_left"
              style={{
                backgroundImage: `url(${Spot})`,
              }}
            >
              <div className="see-more__container">
                <h2>
                  Schedule your Pickup/delivery
                </h2>
                <div className="description">
                  Order in for yourself or for the group, with no restrictions on
                  order value
                </div>
                <div className="land-icon-block">
                  <Button
                    className="navbar-container__auth-btn_blue find-btn"
                  >
                    <div>
                      <span>See more</span>
                      <img src={RightArrow} alt="icon" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="land-slider">
              <Slider />
            </div>
          </div>
        </section>
        <section className="apps">
          <div className="apps__phone">
            <img src={DownloadPhone1} width="100%" alt="icon" />
          </div>
          <div className="apps__text">
            <div>
              <h2>
                Laundry in your pocket
              </h2>
              <div className="description">
                Book your Laundry & collect on the go, with the all-new
                GoLaundry app.
              </div>
              <div className="land-icon-block">
                <Button className="download-btn">
                  <img src={AppleIcon} alt="icon" />
                  <div className="download-btn__device">
                    Download on the
                    <span className="download-btn__device_name">App Store</span>
                  </div>
                </Button>
                <Button className="download-btn">
                  <img src={AndroidIcon} alt="icon" />
                  <div className="download-btn__device">
                    Download on the
                    <span className="download-btn__device_name">
                      Play Store
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <img width="100%" src={AboutImg} alt="icon" />
          <div className="footer-wrapper">
            <div className="footer__header">
              <div className="about-laundry">
                <h2>
                  About Go Laundry
                </h2>
                <div className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </div>
                <div className="help-container">
                  <select className="select">
                    <option value="end">English</option>
                    <option value="ger">Germany</option>
                  </select>
                  <MenuItem text="Help" goTo="/" />
                  <MenuItem text="FAQ" goTo="/FAQ" />
                </div>
              </div>
              <div className="become-partner">
                <div className="become-partner__container">
                  <AboutBlock
                    image={<AboutBlockImg1 />}
                    text="Become a Go Partner"
                  />
                  <AboutBlock
                    image={<AboutBlockImg2 />}
                    text="Become a Commercial User"
                  />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
        {this.state.isShowScheduleDeliveryModal && (
          <ScheduleDeliveryModal
            close={() => {
              this.setState({
                isShowScheduleDeliveryModal: false
              });
            }}
          />
        )}
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
              openForgotPass={() =>  
                this.handleTest
              }
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
        {this.state.forgotPass && (
          <ForgotPass
            close={() =>
              this.setState({
                forgotPass: false
              })
            }
            openLogin={() => {
              this.setState({ showLogin: true, forgotPass: false });
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas.list,
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = dispatch => ({
  getAreas: () => dispatch(getAreas()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
