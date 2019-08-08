import React from "react";
import { connect } from "react-redux";
import { getListItem } from "../../_actions/laundryList.actions";
import { getList } from "../../_actions/laundryList.actions";
import Footer from "../../components/Footer";
import ProfileDropDown from "../../components/ProfileDropDown";

import { ReactComponent as DeliveryCarImg } from "../../images/delivery-car.svg";

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {}
    };
  }

  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div className="app bg-pink">
        <div className="orders">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  My Orders
                </span>
              </div>
            </div>
            {this.props.list &&
              this.props.list.map(item => {
                return (
                  <React.Fragment>
                    <div className="orders__sidebar_order-block">
                      <div className="orders__sidebar_order-block_container">
                        <div className="orders__sidebar_order-block_container_title-block">
                          <img
                            className="orders__sidebar_order-block_container_title-block_icon"
                            src={item.imageIco}
                            alt="title_icon"
                          />
                          <div className="orders__sidebar_order-block_container_title-block_info">
                            <span className="orders__sidebar_order-block_container_title-block_info_text">
                              {item.name}
                            </span>
                            <div className="orders__sidebar_order-block_container_title-block_info_detail">
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_date">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_head">
                                  ORDER DATE
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_body">
                                  12.04.2018
                                </span>
                              </div>
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_order">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_head">
                                  ORDER ID
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_body">
                                  1
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="orders__sidebar_order-block_container_progress-bar">
                          <div className="progress-container">
                            <ol className="progress-list">
                              <li className="progress-item done">
                                <div className="done-image" />
                                <div>ORDER</div>
                              </li>
                              <li className="progress-item todo">
                                <div>PICKUP</div>
                              </li>
                              <li className="progress-item todo">
                                <div>CONFIRM</div>
                              </li>
                              <li className="progress-item todo">
                                <div>DELIVERY</div>
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div className="orders__sidebar_order-block_container_bottom">
                          <div className="orders__sidebar_order-block_container_bottom_container">
                            <button className="orders__sidebar_order-block_container_bottom_container_cancel">
                              Cancel
                            </button>
                            <button className="orders__sidebar_order-block_container_bottom_container_detail">
                              Detail
                            </button>
                            <button className="orders__sidebar_order-block_container_bottom_container_male-pay">
                              Make Payment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* without bottom */}
                    <div className="orders__sidebar_order-block">
                      <div className="orders__sidebar_order-block_container">
                        <div className="orders__sidebar_order-block_container_title-block">
                          <img
                            className="orders__sidebar_order-block_container_title-block_icon"
                            src={item.imageIco}
                            alt="title_icon"
                          />
                          <div className="orders__sidebar_order-block_container_title-block_info">
                            <span className="orders__sidebar_order-block_container_title-block_info_text">
                              {item.name}
                            </span>
                            <div className="orders__sidebar_order-block_container_title-block_info_detail">
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_date">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_head">
                                  ORDER DATE
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_body">
                                  12.04.2018
                                </span>
                              </div>
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_order">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_head">
                                  ORDER ID
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_body">
                                  1
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="orders__sidebar_order-block_container_progress-bar">
                          <div className="progress-container">
                            <ol className="progress-list">
                              <li className="progress-item done">
                                <div className="done-image" />
                                <div>ORDER</div>
                              </li>
                              <li className="progress-item todo">
                                <div>PICKUP</div>
                              </li>
                              <li className="progress-item todo">
                                <div>CONFIRM</div>
                              </li>
                              <li className="progress-item todo">
                                <div>DELIVERY</div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* order canceled */}
                    <div className="orders__sidebar_order-block">
                      <div className="orders__sidebar_order-block_container">
                        <div className="orders__sidebar_order-block_container_title-block">
                          <img
                            className="orders__sidebar_order-block_container_title-block_icon"
                            src={item.imageIco}
                            alt="title_icon"
                          />
                          <div className="orders__sidebar_order-block_container_title-block_info">
                            <span className="orders__sidebar_order-block_container_title-block_info_text">
                              {item.name}
                            </span>
                            <div className="orders__sidebar_order-block_container_title-block_info_detail">
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_date">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_head">
                                  ORDER DATE
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_date_body">
                                  12.04.2018
                                </span>
                              </div>
                              <div className="orders__sidebar_order-block_container_title-block_info_detail_order">
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_head">
                                  ORDER ID
                                </span>
                                <span className="orders__sidebar_order-block_container_title-block_info_detail_order_body">
                                  1
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="orders__sidebar_order-block_container_bottom">
                          <div className="orders__sidebar_order-block_container_bottom_container">
                            <span className="orders__sidebar_order-block_container_bottom_container_order-canceled-text">
                              Order Cancelled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div className="orders__main">
            <div className="orders__main_cont">
              <div className="orders__main_cont_head">
                <div className="orders__main_cont_head_title-block">
                  <img
                    className="orders__main_cont_head_title-block_icon"
                    src={(() => {
                      if (this.props.list.length > 0) {
                        let item = this.props.list[0];
                        return item.imageIco;
                      }
                    })()}
                    alt="title_icon"
                  />
                  <div className="orders__main_cont_head_title-block_info">
                    <span className="orders__main_cont_head_title-block_info_text">
                      Al Mana Laundry Service
                    </span>
                    <div className="orders__main_cont_head_title-block_info_detail">
                      <div className="orders__main_cont_head_title-block_info_detail_date">
                        <span className="orders__main_cont_head_title-block_info_detail_date_head">
                          ORDER DATE
                        </span>
                        <span className="orders__main_cont_head_title-block_info_detail_date_body">
                          12.04.2018
                        </span>
                      </div>
                      <div className="orders__main_cont_head_title-block_info_detail_order">
                        <span className="orders__main_cont_head_title-block_info_detail_order_head">
                          ORDER ID
                        </span>
                        <span className="orders__main_cont_head_title-block_info_detail_order_body">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="orders__main_cont_head_btns-block">
                  <button className="orders__main_cont_head_btns-block_cancel">
                    Cancel
                  </button>
                  <button className="orders__main_cont_head_btns-block_make-pal">
                    Make Payment
                  </button>
                </div>
              </div>
              <div className="orders__main_cont_progress">
                <div className="progress-container">
                  <ol className="progress-list">
                    <li className="progress-item done">
                      <div className="done-image" />
                      <div className="done-image_bg" />
                      <div className="text">ORDER</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">PICKUP</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">CONFIRM</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">DELIVERY</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">READY FOR PICKUP</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">PROCESSING</div>
                    </li>
                    <li className="progress-item todo">
                      <div className="text">DELIVERY</div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="orders__main_cont_details">
                <ProfileDropDown
                  id={1}
                  isOpen={true}
                  disabled={true}
                  name="Delivery Address"
                >
                  <div className="orders__main_cont_details_item">
                    <span className="orders__main_cont_details_item_adress-title">
                      The Pearl Qatar
                    </span>
                    <span className="orders__main_cont_details_item_adress-body">
                      Al Markhiya Street, Alahli Bank Building, 2nd Floor Pobox
                      11685 ,Doha
                    </span>
                  </div>
                </ProfileDropDown>
                <ProfileDropDown
                  id={2}
                  isOpen={true}
                  disabled={true}
                  name="Pickup And Delivery"
                >
                  <div className="orders__main_cont_details_item">
                    <div className="pick-del-block">
                      <div className="pick-del-block_item">
                        <span className="pick-del-block_item_title">
                          PICKUP
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
                  id={3}
                  isOpen={true}
                  disabled={true}
                  name="Payment Type"
                >
                  <div className="orders__main_cont_details_item">
                    <span className="orders__main_cont_details_item_adress-body">
                      Credit/Debit Card
                    </span>
                  </div>
                </ProfileDropDown>
                <ProfileDropDown
                  id={4}
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

const connectedOrders = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

export { connectedOrders as Orders };
