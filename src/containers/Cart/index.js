import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Footer from "../../components/Footer";

import { updateCartItem } from "../../_actions/user.actions";

import { ReactComponent as AddImg } from "../../images/add-btn.svg";
import { ReactComponent as SubImg } from "../../images/subtract-btn.svg";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userCart: [],
    };
  }

  componentWillMount() {
    if(this.props.user.basket.cartDetails.cartServiceBeanMap !== undefined) {
      this.setState({userCart: this.props.user.basket.cartDetails.cartServiceBeanMap})
    } 
  }

  componentDidMount() {
    if(this.props.user.basket.cartDetails.cartServiceBeanMap !== undefined) {
      this.setState({userCart: this.props.user.basket.cartDetails.cartServiceBeanMap})
    }
  }

  goToCheckout = () => {
    this.props.history.push("/chekcout");
  };

  addDishdasha = ( category, itemId ) => {
    this.state.userCart.map(categorys => {
      if(categorys[0] === category) {
        let item = categorys[1].find(item => {
          return item.itemId === itemId
        })
        item.count = item.count + 1;

        const dataForUpdate = {
          "customerId": this.props.user.userId,
          "providerId": Number(this.props.user.basket.provider.providerId),
          "cartServiceList": [
            {
              "itemId": `${itemId}`,
              "serviceType": category,
              "count": item.count
            }
          ]
        }

        this.props.updateCart(dataForUpdate);
      }
    })
  };

  subDishdasha = ( category, itemId ) => {
    this.state.userCart.map(categorys => {
      if(categorys[0] === category) {
        let item = categorys[1].find(item => {
          return item.itemId === itemId
        })
        if(item.count != 0) {
          item.count = item.count - 1;
        }

        const dataForUpdate = {
          "customerId": this.props.user.userId,
          "providerId": Number(this.props.user.basket.provider.providerId),
          "cartServiceList": [
            {
              "itemId": `${itemId}`,
              "serviceType": category,
              "count": item.count
            }
          ]
        }

        this.props.updateCart(dataForUpdate);
      }
    })
  };

  render() {
    const { laundryList, user } = this.props;
    let userCartCount = user.cartCount.split(' ');
    userCartCount = Number(userCartCount[2]);
    const userCart = this.state.userCart;
    return (
      <div className="app bg-pink">
        <div className="cart">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Cart
                </span>
              </div>
            </div>
          </div>
          <div className="cart__main">
            <div className="cart__main_cont">
              <div className="cart__main_cont_title-block">
                <div className="cart__main_cont_title-block_cont">
                  <span className="cart__main_cont_title-block_cont_items">
                    {userCartCount} items
                  </span>
                  <span className="cart__main_cont_title-block_cont_price">
                    QR {user.basket.cartDetails.subTotal}
                  </span>
                </div>
              </div>
              <div className="cart__main_cont_product">
                <div className="cart__main_cont_product_cont">
                  <img
                    className="cart__main_cont_product_cont_img"
                    src={user.basket.provider.iconUrl}
                    alt="img"
                  />
                  <span className="cart__main_cont_product_cont_text">
                  {user.basket.provider.name}
                  </span>
                </div>
              </div>
              <div className="cart__main_cont_table">
                <div className="cart__main_cont_table_cont">
                  <div className="price-table">
                    <div className="price-table__header">
                      <span className="price-table__header_item">ITEM</span>
                      <span className="price-table__header_count">QTY</span>
                      <span className="price-table__header_price">PRICE</span>
                    </div>
                    <div>
                      {userCart.map((category, index) => {
                          return(
                            <div>
                              <div key={index} className="price-table-bold">{category[0]}</div>
                              <div>
                                {category[1].map((items,index) => {
                                  return(
                                    <div className="price-table-count-actions" key={index}>
                                      <div className="price-table-count-actions_regular">{items.itemDescription}</div>
                                        <div className="price-table-count-actions_calc">
                                          <div
                                            className="price-table_calc_btn"
                                            onClick={() => {
                                              this.addDishdasha(category[0], items.itemId);
                                            }}
                                          >
                                            <AddImg />
                                          </div>
                                          <div className="price-table_calc_count">
                                            {items.count}
                                          </div>
                                          <div
                                            className="price-table_calc_btn"
                                            onClick={() => {
                                              this.subDishdasha(category[0], items.itemId);
                                            }}
                                          >
                                            <SubImg />
                                          </div>
                                        </div>
                                        <div className="price-table-count-actions_price">QR {items.price.toFixed(2)}</div>
                                      </div>
                                  )
                                })}
                              </div>
                            </div>
                          )
                      })}
                    </div>
                  </div>

                  <div className="price-table-block">
                      <div className="price-table-block__line">
                        <div className="left">Sub Total</div>
                        <div className="right">QR {user.basket.cartDetails.subTotal}</div>
                      </div>
                      <div className="price-table-block__line">
                        <div className="left">Delivery Charges</div>
                        <div className="right">QR 0.00</div>
                      </div>
                      <div className="price-table-block__line">
                        <div className="left">Credits Redeemed</div>
                        <div className="right">QR 0.00</div>
                      </div>
                      <div className="price-table-block__line">
                        <div className="left">Offer Redeemed</div>
                        <div className="right price-table-coupon">Apply Coupon</div>
                      </div>
                      <div className="price-table-block__line total-amount">
                        <div className="left">Total Amount</div>
                        <div className="right">QR {user.basket.cartDetails.subTotal}</div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="cart__main_cont_checkout-btn-row">
                <button
                  className="cart__main_cont_checkout-btn-row_btn"
                  onClick={this.goToCheckout}
                >
                  checkout
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
  updateCart: updateCartItem,
};

function mapStateToProps(state) {
  const { laundryList, user } = state;
  return { laundryList, user };
}

const connectedCart = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);

export { connectedCart as Cart };
