import React from "react";
import { connect } from "react-redux";
import { getListItem, getPriceTabInfo, getReviews, getProviderItemsList } from "../../_actions/laundryList.actions";
import { addToBasket } from "../../_actions/user.actions";
import Footer from "../../components/Footer";
import OrderResult from "../../components/OrderResult";
import StarsRating from "../../components/StarsRating";
import PaymentType from "../../components/PaymentType";
import ProfileTab from "../../components/ProfileMenuTab";
import ProfilePriceMenuTab from "../../components/ProfilePriceMenuTab";
import ProfileDropDown from "../../components/ProfileDropDown";
import ProfileItem from "../../components/ProfileItem";
import ProfilePrice from "../../components/ProfilePrice";
import OrderCloud from "../../components/OrderCloud";
import ProfileDropDownItem from "../../components/ProfileDropDownItem";
import Accordeon from '../../components/Accordeon';

import { Redirect } from 'react-router-dom'

import { ReactComponent as DrtCleanIcon } from "../../images/dry-clean-icon.svg";
import { ReactComponent as WashIconIcon } from "../../images/wash-icon.svg";
import { ReactComponent as WashIronIcon } from "../../images/wash-iron-icon.svg";
import ReviewsItem from "../../components/ReviewsItem";

const menuItems = {
  ITEMS: "ITEMS",
  PRICES: "PRICES",
  INFO: "INFO",
};

const menuInfo = {
  REVIEWS: "REVIEWS",
  ABOUT: "ABOUT",
}

const priceMenuItems = {
  DRY: "DRY",
  WASH_IRON: "WASH_IRON",
  WASH: "WASH"
};

class LaundryProfile extends React.Component {
  state = {
    dropdownItemShow: false,
    selectedDropdownItem: {},
    selectedMenuTab: menuItems.ITEMS,
    selectedInfoTab: menuInfo.REVIEWS,
    selectedPriceMenuTab: priceMenuItems.DRY,
    orderResultState: false,
    showOrderResult: false,
    aboutTabState: false,
    workingHrsTabState: false,
  };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.getProviderItemsList(id);
    this.props.getListItem(id);
    this.props.getPriceTabInfo(id);
    this.props.getReviews(id);
  }

  showDropdownItemModal = item => {
    this.setState({
      dropdownItemShow: true,
      selectedDropdownItem: item
    });
  };

  closeDropdownItemModal = () => {
    this.setState({
      dropdownItemShow: false,
      selectedDropdownItem: {}
    });
  };

  menuTabHandler = tabName => {
    this.setState({
      selectedMenuTab: tabName
    });
  };

  infoTabHandler = tabName => {
    this.setState({
      selectedInfoTab: tabName
    });
  };

  priceMenuTabHandler = tabName => {
    this.setState({
      selectedPriceMenuTab: tabName
    });
  };

  generateData = (count, service, itemId) => {
    return (
      {
        "itemId": `${itemId}`,
        "serviceType": service,
        "count": count
      }
    )
  }

  addToBusket = item => {
    // go to busket action
    this.setState({
      redirect: true,
    });

    const wash = item.services[1];
    const dry = item.services[2];
    const iron = item.services[0];

    const washData = this.generateData(wash.count, wash.serviceType, item.id);
    const dryData = this.generateData(dry.count, dry.serviceType, item.id);
    const ironData = this.generateData(iron.count, iron.serviceType, item.id);
    
    const data = {
      "customerId": this.props.user.userId,
      "providerId": Number(this.props.laundryList.listItem.providerId),
      "cartServiceList": [
        washData,
        dryData,
        ironData,
      ]
    }
    this.props.addToBasket(data);
  };

  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to="/order-success" />
    }
  }

  render() {
    const { user, laundryList } = this.props;
    const listItem = laundryList.listItem;
    let userCartCount = user.cartCount.split(' ');
    userCartCount = Number(userCartCount[2]);
    return (
      <div className="app bg-pink">
          {this.renderRedirect()}
          {listItem && laundryList.providerItemsList && !this.state.showOrderResult ? (
            <React.Fragment>
              <OrderCloud quantity={userCartCount} />
              <div className="laundry-profile">
                <div className="laundry-profile__title">
                  <div className="laundry-profile__title_block">
                    <div className="laundry-profile__title_block_icon-name-rev">
                      <img
                        className="laundry-profile__title_block_icon-name-rev_icon"
                        src={listItem.iconUrl}
                        alt="title_icon"
                      />
                      <div className="laundry-profile__title_block_icon-name-rev_name-rev-block">
                        <span className="laundry-profile__title_block_icon-name-rev_name-rev-block_name">
                          {listItem.name}
                        </span>
                        <div className="laundry-profile__title_block_icon-name-rev_name-rev-block_rev">
                          <StarsRating
                            stars={listItem.rating}
                          />
                          <span className="laundry-profile__title_block_icon-name-rev_name-rev-block_rev_count">
                            ({listItem.totalReviews})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="laundry-profile__title_block_desc">
                      <div className="laundry-profile__title_block_desc_item">
                        <span className="laundry-profile__title_block_desc_item_title">
                          Minimum Order
                        </span>
                        <span className="laundry-profile__title_block_desc_item_body">
                          {listItem.minimumOrder &&
                            listItem.minimumOrder.toFixed(
                              2
                            )}{" "}
                          QR
                        </span>
                      </div>
                      <div className="laundry-profile__title_block_desc_item">
                        <span className="laundry-profile__title_block_desc_item_title">
                          Delivery Charge
                        </span>
                        <span className="laundry-profile__title_block_desc_item_body">
                          {listItem.minimumOrder &&
                            listItem.deliveryCharge.toFixed(
                              2
                            )}{" "}
                          QR
                        </span>
                      </div>
                      <div className="laundry-profile__title_block_desc_item">
                        <div className="laundry-profile__title_block_desc_item_body">
                          {listItem.paymentType.split(',').map(
                            (type, index) => {
                              return <PaymentType type={type} key={index} />;
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laundry-profile__desc">
                  <div className="laundry-profile__desc_content">
                    <div className="laundry-profile__desc_content_tabs">
                      <ProfileTab
                        name="Items"
                        isActive={this.state.selectedMenuTab === menuItems.ITEMS}
                        click={() => this.menuTabHandler(menuItems.ITEMS)}
                      />
                      <ProfileTab
                        name="Prices"
                        isActive={this.state.selectedMenuTab === menuItems.PRICES}
                        click={() => this.menuTabHandler(menuItems.PRICES)}
                      />
                      <ProfileTab
                        name="Info"
                        isActive={this.state.selectedMenuTab === menuItems.INFO}
                        click={() => this.menuTabHandler(menuItems.INFO)}
                      />
                    </div>
                    {(() => {
                      switch (this.state.selectedMenuTab) {
                        case menuItems.ITEMS: {
                          return (
                              laundryList.providerItemsList.itemTab.map(providerItem => {
                                return(
                                  <ProfileDropDown
                                    id={providerItem[1].id}
                                    key={providerItem[1].id}
                                    showHandler={this.showDropDownContentHandler}
                                    // isOpen={dropdownItem.isOpen}
                                    name={providerItem[1].name}
                                    count={providerItem[1].count}
                                  >
                                    {providerItem[1].itemList.map(
                                    item => {
                                      return (
                                        <ProfileItem
                                          id={item.itemId}
                                          key={item.itemId}
                                          image={item.itemImage}
                                          number={item.items}
                                          name={item.itemName}
                                          price={item.Price}
                                          services={item.serviceTypePriceMap}
                                          parentCategoryId={item.parentCategoryId}
                                          totalCount={item.totalCartCount}
                                          cartCountMap={item.itemCartCountMap}
                                          onClick={this.showDropdownItemModal}
                                        />
                                      )
                                    }
                                        
                                    )}
                                  </ProfileDropDown>
                                )
                              })
                          )
                        }
                        case menuItems.PRICES: {
                          return (
                            <div className="prices-block">
                              <div className="profile-menu-tab__list">
                                <ProfilePriceMenuTab
                                  icon={<DrtCleanIcon />}
                                  active={
                                    this.state.selectedPriceMenuTab ===
                                    priceMenuItems.DRY
                                  }
                                  click={() =>
                                    this.priceMenuTabHandler(priceMenuItems.DRY)
                                  }
                                  name="Dry Clean"
                                />
                                <ProfilePriceMenuTab
                                  icon={<WashIronIcon />}
                                  active={
                                    this.state.selectedPriceMenuTab ===
                                    priceMenuItems.WASH_IRON
                                  }
                                  click={() =>
                                    this.priceMenuTabHandler(
                                      priceMenuItems.WASH_IRON
                                    )
                                  }
                                  name="Wash & Iron"
                                />
                                <ProfilePriceMenuTab
                                  icon={<WashIconIcon />}
                                  active={
                                    this.state.selectedPriceMenuTab ===
                                    priceMenuItems.WASH
                                  }
                                  click={() =>
                                    this.priceMenuTabHandler(priceMenuItems.WASH)
                                  }
                                  name="Wash"
                                />
                              </div>
                              {(() => {
                                switch (this.state.selectedPriceMenuTab) {
                                  case priceMenuItems.DRY: {
                                    return (
                                      laundryList.priceTab.map(
                                        dropdownItem => {
                                           if(dropdownItem.serviceType === "DRY") {
                                             return(
                                              dropdownItem.categories.map(
                                                category => {
                                                return (
                                                  <ProfileDropDown
                                                    id={category[1].id}
                                                    key={category[1].id}
                                                    name={category[1].name}
                                                  >
                                                    {category[1].itemList.map(item => {
                                                      return(
                                                        <ProfilePrice
                                                          key={item.itemId}
                                                          name={item.itemName}
                                                          price={item.serviceTypePriceMap[0][1]}
                                                        />
                                                      )
                                                    })}
                                                  </ProfileDropDown>
                                                );

                                              })
                                            )
                                          }
                                        
                                        }
                                      )
                                    );
                                  }
                                  case priceMenuItems.WASH_IRON: {
                                    return (
                                      laundryList.priceTab.map(
                                        dropdownItem => {
                                           if(dropdownItem.serviceType === "IRN") {
                                             return(
                                              dropdownItem.categories.map(
                                                category => {
                                                return (
                                                  <ProfileDropDown
                                                    id={category[1].id}
                                                    key={category[1].id}
                                                    name={category[1].name}
                                                  >
                                                    {category[1].itemList.map(item => {
                                                      return(
                                                        <ProfilePrice
                                                          key={item.itemId}
                                                          name={item.itemName}
                                                          price={item.serviceTypePriceMap[0][1]}
                                                        />
                                                      )
                                                    })}
                                                  </ProfileDropDown>
                                                );

                                              })
                                            )
                                          }
                                        
                                        }
                                      )
                                    );
                                  }
                                  case priceMenuItems.WASH: {
                                    return (
                                      laundryList.priceTab.map(
                                        dropdownItem => {
                                           if(dropdownItem.serviceType === "WSH") {
                                             return(
                                              dropdownItem.categories.map(
                                                category => {
                                                return (
                                                  <ProfileDropDown
                                                    id={category[1].id}
                                                    key={category[1].id}
                                                    name={category[1].name}
                                                  >
                                                    {category[1].itemList.map(item => {
                                                      return(
                                                        <ProfilePrice
                                                          key={item.itemId}
                                                          name={item.itemName}
                                                          price={item.serviceTypePriceMap[0][1]}
                                                        />
                                                      )
                                                    })}
                                                  </ProfileDropDown>
                                                );

                                              })
                                            )
                                          }
                                        
                                        }
                                      )
                                    );
                                  }
                                  default:
                                    return null;
                                }
                              })()}
                            </div>
                          );
                        }
                        case menuItems.INFO: {
                          return (
                            <div className="info__cont">
                              <div className="info__cont_tabs">
                                <ProfileTab
                                  name="Reviews"
                                  isActive={this.state.selectedInfoTab === menuInfo.REVIEWS}
                                  click={() => this.infoTabHandler(menuInfo.REVIEWS)}
                                />
                                <ProfileTab
                                  name="About"
                                  isActive={this.state.selectedInfoTab === menuInfo.ABOUT}
                                  click={() => this.infoTabHandler(menuInfo.ABOUT)}
                                />
                              </div>
                              
                              {(() => {
                                switch(this.state.selectedInfoTab) {
                                  case menuInfo.REVIEWS: {
                                    return(
                                      <div className="reviews-block">
                                        {laundryList.reviews.reviewsList.map(review => (
                                          <div>
                                            <ReviewsItem 
                                              userName={review.firstname}
                                              description={review.reviews}
                                              date={review.ReviewDate}
                                              stars={review.ratings}
                                              reviewHide={review.reviewHide}
                                              orderId={review.orderId}
                                              customerId={review.customerId}
                                            />
                                          </div>
                                        ))}
                                        <p>Total Reviews: {laundryList.reviews.totalReviews}</p>
                                      </div>
                                    )
                                  }
                                  case menuInfo.ABOUT: {
                                    return(
                                      <div className="item-about-block">
                                          <Accordeon 
                                            title="About"
                                            description={listItem.about}
                                          />
                                          <Accordeon 
                                            title="Working Hours"
                                            workHrs={listItem.workingHours}
                                          />
                                          <div className="item-about-block_payment-type">
                                            Payment type
                                            <div className="item-about-block_payment-type_items">
                                              {listItem.paymentType.split(',').map(
                                                (type, index) => {
                                                  return <PaymentType type={type} key={index} />;
                                                }
                                              )}
                                            </div>
                                          </div>
                                          <div className="item-about-block_location">
                                            Location
                                            <div className="item-about-block_location_address">
                                              <p>{listItem.area}</p>
                                              <p>{listItem.address}</p>
                                              <p>{listItem.phone}, {listItem.email}</p>
                                            </div>
                                          </div>
                                      </div>
                                    )
                                  }
                                  default: { return null };
                                }
                              })()}
                            </div>
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
              {this.state.dropdownItemShow && (
                <ProfileDropDownItem
                  item={this.state.selectedDropdownItem}
                  addToBusket={this.addToBusket}
                  showFailed={this.showFailed}
                  close={this.closeDropdownItemModal}
                />
              )}
            </React.Fragment>
          ) : (
            null
          )}
        
        <Footer />
      </div>
      )};
}

const mapDispatchToProps = {
  getListItem: getListItem,
  addToBasket: addToBasket,
  getPriceTabInfo: getPriceTabInfo,
  getReviews: getReviews,
  getProviderItemsList: getProviderItemsList,
};

function mapStateToProps(state) {
  const { laundryList, user } = state;
  return { laundryList, user };
}

const connectedLaundryProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaundryProfile);

export { connectedLaundryProfile as LaundryProfile };
