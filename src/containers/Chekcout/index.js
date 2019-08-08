import React from "react";
import { connect } from "react-redux";
import { getListItem } from "../../_actions/laundryList.actions";
import { getList } from "../../_actions/laundryList.actions";
import Footer from "../../components/Footer";
import ProfileDropDown from "../../components/ProfileDropDown";
import MenuItem  from '../../components/MenuItem';

import { ReactComponent as DeliveryCarImg } from "../../images/delivery-car.svg";

const paymentType = {
  CASH: "CASH",
  CARD: "CARD"
};

class Chekcout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentType: paymentType.CARD
    };
  }

  render() {
    return (
      <div className="app bg-pink">
        <div className="checkout">
          <div className="checkout__container">
            <div className="checkout__container_title">
              <span className="checkout__container_title_text">Checkout </span>
            </div>
            <div className="checkout__container_body">
              <div className="checkout__container_body_adress-row">
                <div className="checkout__container_body_adress-row_item-address">
                  <ProfileDropDown
                    id={1}
                    isOpen={true}
                    disabled={true}
                    editable
                    name="Delivery Address"
                  >
                    <div className="checkout__container_body_adress-row_item-address_body">
                      <span className="checkout__container_body_adress-row_item-address_body_adress-title">
                        The Pearl Qatar
                      </span>
                      <span className="checkout__container_body_adress-row_item-address_body_adress-body">
                        Al Markhiya Street,
                        <br />
                        Alahli Bank Building, 2nd Floor
                        <br />
                        Pobox 11685,
                        <br />
                        Doha
                      </span>
                    </div>
                  </ProfileDropDown>
                </div>
                <div className="checkout__container_body_adress-row_item-input">
                  <ProfileDropDown
                    id={2}
                    isOpen={true}
                    disabled={true}
                    editable
                  >
                    <div className="checkout__container_body_adress-row_item-input_body">
                      <input
                        type="email"
                        placeholder="Email"
                        className="checkout-input"
                      />
                    </div>
                  </ProfileDropDown>
                </div>
                <div className="checkout__container_body_adress-row_item-input">
                  <ProfileDropDown
                    id={3}
                    isOpen={true}
                    disabled={true}
                    editable
                  >
                    <div className="checkout__container_body_adress-row_item-input_body">
                      <input
                        type="number"
                        placeholder="Mobile"
                        className="checkout-input"
                      />
                    </div>
                  </ProfileDropDown>
                </div>
              </div>
              <ProfileDropDown
                id={4}
                isOpen={true}
                disabled={true}
                name="Schedule Pickup And Delivery"
              >
                <div className="checkout__container_body_pick-del">
                  <div className="pick-del-block">
                    <div className="pick-del-block_item">
                      <span className="pick-del-block_item_title">PICKUP</span>
                      <div className="pick-del-block_item_date-block">
                        <span className="pick-del-block_item_date-block_title">
                          28
                        </span>
                        <div className="pick-del-block_item_date-block_date">
                          <span className="pick-del-block_item_date-block_date_month">
                            AUG 2018
                          </span>
                          <span className="pick-del-block_item_date-block_date_time">
                            04:45 - 05-00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pick-del-block_car-line">
                      <DeliveryCarImg />
                    </div>
                    <div className="pick-del-block_item">
                      <span className="pick-del-block_item_title">
                        DELIVERY
                      </span>
                      <div className="pick-del-block_item_date-block">
                        <span className="pick-del-block_item_date-block_title">
                          28
                        </span>
                        <div className="pick-del-block_item_date-block_date">
                          <span className="pick-del-block_item_date-block_date_month">
                            AUG 2018
                          </span>
                          <span className="pick-del-block_item_date-block_date_time">
                            04:45 - 05-00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ProfileDropDown>
              <ProfileDropDown
                id={5}
                isOpen={true}
                disabled={true}
                name="Payment Type"
              >
                <div className="checkout__container_body_pay-check">
                  <div
                    className="checkout__container_body_pay-check_item"
                    onClick={() => {
                      this.setState({
                        paymentType: paymentType.CASH
                      });
                    }}
                  >
                    <div
                      className={`checkout__container_body_pay-check_item_check${
                        this.state.paymentType === paymentType.CASH ? "ed" : ""
                      }`}
                    />
                    <span className="checkout__container_body_pay-check_item_text">
                      Cash On Delivery
                    </span>
                  </div>
                  <div
                    className="checkout__container_body_pay-check_item"
                    onClick={() => {
                      this.setState({
                        paymentType: paymentType.CARD
                      });
                    }}
                  >
                    <div
                      className={`checkout__container_body_pay-check_item_check${
                        this.state.paymentType === paymentType.CARD ? "ed" : ""
                      }`}
                    />
                    <span className="checkout__container_body_pay-check_item_text">
                      Credit/Debit Card
                    </span>
                  </div>
                </div>
              </ProfileDropDown>
              <ProfileDropDown
                id={6}
                isOpen={true}
                disabled={true}
                name="Leave a Note"
              >
                <div className="checkout__container_body_note">
                  <textarea
                    placeholder="Type here your notes to laundy"
                    className="checkout-input"
                  />
                </div>
              </ProfileDropDown>
              <ProfileDropDown
                id={7}
                isOpen={true}
                disabled={true}
                name="Order Summery"
              >
                <div className="orders__main_cont_details_item-table">
                  <table className="price-table">
                    <tr>
                      <th className="price-table-regular">
                        <div>ITEM</div>
                      </th>
                      <th className="price-table-regular">
                        <div>QTY</div>
                      </th>
                      <th className="price-table-regular">
                        <div>PRICE</div>
                      </th>
                    </tr>
                    <tr>
                      <td className="price-table-bold">
                        <div>Dry CLean</div>
                      </td>
                      <td className="price-table-bold" />
                      <td className="price-table-bold" />
                    </tr>
                    <tr>
                      <td className="price-table-regular">
                        <div>Dishdasha</div>
                      </td>
                      <td className="price-table-regular">
                        <div>1</div>
                      </td>
                      <td className="price-table-regular">
                        <div>QR 10.00</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-table-regular">
                        <div>Dishdasha</div>
                      </td>
                      <td className="price-table-regular">
                        <div>1</div>
                      </td>
                      <td className="price-table-regular">
                        <div>QR 10.00</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-table-bold">
                        <div>Wash</div>
                      </td>
                      <td className="price-table-bold" />
                      <td className="price-table-bold" />
                    </tr>
                    <tr>
                      <td className="price-table-regular">
                        <div>Dishdasha</div>
                      </td>
                      <td className="price-table-regular">
                        <div>1</div>
                      </td>
                      <td className="price-table-regular">
                        <div>QR 10.00</div>
                      </td>
                    </tr>
                  </table>
                  <div className="price-table-block">
                    <div className="price-table-block_cont">
                      <table className="price-table">
                        <tr className="price-table-bg">
                          <td className="price-table-total btl">
                            <div>Sub Total</div>
                          </td>
                          <td className="price-table-total" />
                          <td className="price-table-total btr">
                            <div>QR 10.00</div>
                          </td>
                        </tr>
                        <tr className="price-table-bg">
                          <td className="price-table-total">
                            <div>Delivery Charges</div>
                          </td>
                          <td className="price-table-total" />
                          <td className="price-table-total">
                            <div>QR 10.00</div>
                          </td>
                        </tr>
                        <tr className="price-table-bg">
                          <td className="price-table-total">
                            <div>Credits Redeemed</div>
                          </td>
                          <td className="price-table-total" />
                          <td className="price-table-total">
                            <div>QR 10.00</div>
                          </td>
                        </tr>
                        <tr className="price-table-bg">
                          <td className="price-table-total bbr">
                            <div>Total Amount</div>
                          </td>
                          <td className="price-table-total" />
                          <td className="price-table-total bbl">
                            <div>QR 10.00</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </ProfileDropDown>
              <div className="checkout__container_body_proceed-btn-row">
                <MenuItem 
                  goTo="/waiting-approval"
                  className="checkout__container_body_proceed-btn-row_btn"
                  text="proceed to checkout"
                />
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
  getList: getList,
  getListItem: getListItem
};

function mapStateToProps(state) {
  const { laundryList } = state;
  return laundryList;
}

const connectedChekcout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chekcout);

export { connectedChekcout as Chekcout };
