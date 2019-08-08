import React from "react";
import { connect } from "react-redux";
import StarsRating from "../../components/StarsRating";
import Footer from "../../components/Footer";
import { getUserFavouritesProviders, deleteUserFavouriteProvider } from '../../_actions/user.actions';

import { ReactComponent as TrashIcon } from "../../images/trash-icon.svg";
import TempImg from "../../images/laundry-list-item__title_img2.png";
import Ico from "../../images/laundry-list-item__title_icon.png";

class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getUserFavouritesProviders(this.props.user.userId)
  }

  handleDeleteFavourite = providerId => {
    this.props.deleteUserFavouriteProvider(Number(providerId));
  }

  render() {
    const { user } = this.props;
    return (
      <div className="app bg-pink">
        <div className="favourites">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Favourits
                </span>
              </div>
            </div>
          </div>
          <div className="favourites__main">
            <div className="favourites__main_cont">
              {user.favourites && user.favourites.map(fav => (
                <div className="fav-item">
                  <div className="fav-item__container">
                    <img
                      className="fav-item__container_img"
                      src={fav.iconUrl}
                      alt="ico"
                    />
                    <div className="fav-item__container_body">
                      <span className="fav-item__container_body_title">
                        {fav.name}
                      </span>
                      <div className="fav-item__container_body_revs">
                        <StarsRating stars={fav.rating} />
                        <span className="fav-item__container_body_revs_text">
                          ({fav.totalReviews} Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="trash-btn">
                    <TrashIcon 
                      onClick={() => this.handleDeleteFavourite(fav.providerId)}
                    />
                  </div>
                  <div className="fav-item__shadow" />
                  <img className="fav-item__img" src={fav.bannerUrl} alt="bg_img" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUserFavouritesProviders: getUserFavouritesProviders,
  deleteUserFavouriteProvider: deleteUserFavouriteProvider,
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const connectedFavourites = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);

export { connectedFavourites as Favourites };
