import React from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import ItemListLaundry from "../../components/ItemListLaundry";
import SearchListLaundry from "../../components/SearchListLaundry";
import OrderCloud from "../../components/OrderCloud/index";

import { deleteUserFavouriteProvider, addProviderToFavourite, getUserFavouritesProviders } from '../../_actions/user.actions';

import { getList } from "../../_actions/laundryList.actions";

class LaundryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
    this.handleDeleteFromFavourites = this.handleDeleteFromFavourites.bind(this);
  }

  

  componentDidMount() {
    const { areaValue } = this.props.location.state;
    this.props.getList(areaValue);
  }

  getText = text => {
    // actions with search text
    // alert(text);
  };

  handleAddToFavourites = providerId => {
    this.props.addProviderToFavourite(providerId);
    this.props.getUserFavouritesProviders(this.props.user.userId);
  }

  handleDeleteFromFavourites = providerId => {
    this.props.deleteUserFavouriteProvider(providerId);
    this.props.getUserFavouritesProviders(this.props.user.userId);
  }

  render() {
    const { user, laundryList } = this.props;
    let userCartCount = user.cartCount.split(' ');
    userCartCount = Number(userCartCount[2]);

    return (
      <div className="app bg-pink">
        <OrderCloud
          quantity={
             user.basket && userCartCount
          }
        />
        <SearchListLaundry searchInputHandler={this.getText} />
        {laundryList.list &&
          laundryList.list.map(item => {
            return (
              <ItemListLaundry
                key={item.ProviderId}
                id={item.ProviderId}
                imageBg={item.BannerUrl}
                imageIco={item.IconUrl}
                name={item.Name}
                stars={item.Rating}
                reviewsCount={item.TotalReviews}
                minOrder={item.MinimumOrder}
                deliveryCharge={item.DeliveryCharge}
                paymentTypes={item.PaymentType}
                services={item.Services}
                favourites={user.favourites}
                handleDeleteFromFavourites={providerId => this.handleDeleteFromFavourites(providerId)}
                handleAddToFavourites={providerId => this.handleAddToFavourites(providerId)}
              />
            );
          })}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getList: getList,
  deleteUserFavouriteProvider: deleteUserFavouriteProvider,
  addProviderToFavourite: addProviderToFavourite,
  getUserFavouritesProviders: getUserFavouritesProviders,
};

function mapStateToProps(state) {
  const { laundryList, user } = state;
  return { laundryList, user };
}

const connectedLaundryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaundryList);

export { connectedLaundryList as LaundryList };
