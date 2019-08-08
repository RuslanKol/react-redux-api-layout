import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Footer from "../../../components/Footer";

import { addNewUserAddress } from '../../../_actions/user.actions';

import { ReactComponent as HomeIcon } from "../../../images/home-icon.svg";
import { ReactComponent as WorkIcon } from "../../../images/work-icon.svg";
import { ReactComponent as PlaceIcon } from "../../../images/place-icon.svg";

const addressType = {
  HOME: "Home",
  WORK: "Work",
  OTHER: "Other"
};

class AddressPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedPlace: null };

    this.city = React.createRef();
    this.zone = React.createRef();
    this.postalCode = React.createRef();
    this.street = React.createRef();
    this.house = React.createRef();
    this.appartment = React.createRef();
    this.floor = React.createRef();
    this.additional = React.createRef();
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
  }

  handleAddNewAddress = () => {
    const newAddress = {
      line1: String(this.city.current.value),
      line2: this.zone.current.value,
      line3: this.postalCode.current.value,
      line4: this.street.current.value,
      line5: this.house.current.value,
      line6: this.appartment.current.value,
      line7: this.floor.current.value,
      line8: this.additional.current.value,
      type: this.state.selectedPlace
    }

    console.log(newAddress);
    this.props.addNewAddress(newAddress);

  }

  render() {
    return (
      <div className="app bg-pink">
        <div className="address-page">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Add Address
                </span>
              </div>
            </div>
          </div>
          <div className="address-page__main">
            <div className="address-page__main_cont">
              <div className="account-settings__main_cont_edit-block">
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">City</label>
                  <input
                    ref={this.city}
                    id="fullName"
                    type="text"
                    placeholder="Type Area Name"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Zone</label>
                  <input
                    ref={this.zone}
                    id="fullName"
                    type="text"
                    placeholder="Type Block Name"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Postal Code</label>
                  <input
                    ref={this.postalCode}
                    id="fullName"
                    type="text"
                    placeholder="Type Postal Code"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Street</label>
                  <input
                    ref={this.street}
                    id="fullName"
                    type="text"
                    placeholder="Type Street Name"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">House / Buillding</label>
                  <input
                    ref={this.house}
                    id="fullName"
                    type="text"
                    placeholder="Type Building / Villa / House Number"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Apartment / Office</label>
                  <input
                    ref={this.appartment}
                    id="fullName"
                    type="text"
                    placeholder="Type Apartment / Office Number"
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Floor</label>
                  <input 
                    ref={this.floor}
                    id="fullName" 
                    type="text" 
                    placeholder="Type Floor" 
                  />
                </div>
                <div className="account-settings__main_cont_edit-block_input">
                  <label htmlFor="fullName">Additional Directions</label>
                  <input
                    ref={this.additional}
                    id="fullName"
                    type="text"
                    placeholder="Type Additional Landmark"
                  />
                </div>
                <span className="account-settings__main_cont_edit-block_head">
                  Save Address As
                </span>
                <div className="account-settings__main_cont_edit-block_address-types-block">
                  <div
                    className={`account-settings__main_cont_edit-block_address-types-block_type${
                      this.state.selectedPlace === addressType.HOME
                        ? " selected"
                        : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedPlace: addressType.HOME
                      });
                    }}
                  >
                    <div className="account-settings__main_cont_edit-block_address-types-block_type_img">
                      <HomeIcon />
                    </div>
                    <span className="account-settings__main_cont_edit-block_address-types-block_type_name">
                      {addressType.HOME}
                    </span>
                  </div>
                  <div
                    className={`account-settings__main_cont_edit-block_address-types-block_type${
                      this.state.selectedPlace === addressType.WORK
                        ? " selected"
                        : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedPlace: addressType.WORK
                      });
                    }}
                  >
                    <div className="account-settings__main_cont_edit-block_address-types-block_type_img">
                      <WorkIcon />
                    </div>
                    <span className="account-settings__main_cont_edit-block_address-types-block_type_name">
                      {addressType.WORK}
                    </span>
                  </div>
                  <div
                    className={`account-settings__main_cont_edit-block_address-types-block_type${
                      this.state.selectedPlace === addressType.OTHER
                        ? " selected"
                        : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedPlace: addressType.OTHER
                      });
                    }}
                  >
                    <div className="account-settings__main_cont_edit-block_address-types-block_type_img">
                      <PlaceIcon />
                    </div>
                    <span className="account-settings__main_cont_edit-block_address-types-block_type_name">
                      {addressType.OTHER}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={this.handleAddNewAddress}
                  className="account-settings__main_cont_save"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addNewAddress: addNewUserAddress,
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const connectedAddressPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddressPage)
);

export { connectedAddressPage as AddressPage };
