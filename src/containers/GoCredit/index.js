import React from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { getAllCredits } from '../../_actions/credits.actions';

import TempImg from "../../images/laundry-list-item__title_icon.png";

class GoCredit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getAllCredits();
  }

  credit(count, percents, price, id, title, enable) {
    if(enable === "true") {
      return (
        <div className="credit" key={id}>
          <div className="credit__cont">
            <span className="credit__cont_title">{title}</span>
            <div className="credit__cont_info">
              <div className="credit__cont_info_count">{`${count}`}</div>
              <div className="credit__cont_info_save">{percents}</div>
            </div>
            <div className="credit__cont_price-block">
              <span className="credit__cont_price-block_text">buy for</span>
              <span className="credit__cont_price-block_price">
                {`${price} QR`}
              </span>
            </div>
          </div>
        </div>
      );
    }
  }

  participatedCredit(id, image, name) {
    return (
      <div className="participated-credit" key={id}>
        <div className="participated-credit__cont">
          <img
            className="participated-credit__cont_img"
            src={image}
            alt="img"
          />
          <span className="participated-credit__cont_name">{`${name}`}</span>
        </div>
      </div>
    );
  }

  render() {
    const { user, credits } = this.props;
    return (
      <div className="app bg-pink">
        <div className="gocredits">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Go Credits
                </span>
              </div>
            </div>
          </div>
          <div className="gocredits__main">
            <div className="gocredits__main_cont">
              <div className="gocredits__main_cont_credits-block">
                {credits.goCreditList && credits.goCreditList.map(credit => {
                  return (
                    this.credit(credit.CreditPoints, credit.OfferText, credit.Price, credit.PackageId, credit.Title, credit.Enable)
                  )
                })}
              </div>
              <h3 className="gocredits__main_cont_head">
                Participated Laundries
              </h3>
              <div className="gocredits__main_cont_credits-block">
                {credits.providerList && credits.providerList.map(provider => {
                  return (
                    this.participatedCredit(provider.ProviderId, provider.IconUrl, provider.Name)
                  )
                })}
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
  getAllCredits: getAllCredits,
};

function mapStateToProps(state) {
  const { user, credits } = state;
  return { user, credits };
}

const connectedGoCredit = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoCredit);

export { connectedGoCredit as GoCredit };
