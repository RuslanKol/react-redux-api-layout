import React from "react";
import { Link } from "react-router-dom";
import StarsRating from "../../components/StarsRating";
import PaymentType from "../../components/PaymentType";

import { ReactComponent as Iron } from "../../images/iron.svg";
import { ReactComponent as Like } from "../../images/like.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Dress } from "../../images/dress.svg";
import { ReactComponent as Laundry } from "../../images/laundry.svg";

const services = {
  WSH: <Iron key={1} />,
  DRY: <Dress key={2} />,
  IRN: <Laundry key={3} />
};

const ItemListLaundry = props => {

  const paymentTypes = props.paymentTypes.split(',');
  const servicesSplit = props.services.split(',');

  return (
    <div className="laundry-list-item">
      
      <div className="laundry-list-item__title">
        <div className="laundry-list-item__title_block">
          <img
            className="laundry-list-item__title_block_icon"
            src={props.imageIco}
            alt="title_icon"
            width="125"
          />
          <div className="laundry-list-item__title_block_name-rews">
            <h2 className="laundry-list-item__title_block_name-rews_name">
            <Link to={`/list/${props.id}`}>{props.name}</Link>
            </h2>
            <div className="laundry-list-item__title_block_name-rews_rews">
              <StarsRating stars={props.stars} />
              <span className="laundry-list-item__title_block_name-rews_rews_count">
                ({props.reviewsCount} Reviews)
              </span>
            </div>
          </div>
          <div className="laundry-list-item__title_block_favourite">
            {
              props.favourites.some(el => Number(el.providerId) === props.id)
              ? <Like width={25} onClick={() => props.handleDeleteFromFavourites(props.id)} /> 
              : <Heart width={25} onClick={() => props.handleAddToFavourites(props.id)} />
            }
          </div>
        </div>
        <div className="laundry-list-item__title_shadow" />
        <img
          className="laundry-list-item__title_img"
          src={props.imageBg}
          alt="title_image"
        />
      </div>
      
      <div className="laundry-list-item__desc">
        <div className="laundry-list-item__desc_block">
          <div className="laundry-list-item__desc_block_item">
            <span className="laundry-list-item__desc_block_item_title">
              Minimum Order
            </span>
            <span className="laundry-list-item__desc_block_item_body">
              {props.minOrder && props.minOrder.toFixed(2)} QR
            </span>
          </div>
          <div className="laundry-list-item__desc_block_item">
            <span className="laundry-list-item__desc_block_item_title">
              Delivery Charge
            </span>
            <span className="laundry-list-item__desc_block_item_body">
              {props.deliveryCharge && props.deliveryCharge.toFixed(2)} QR
            </span>
          </div>
          <div className="laundry-list-item__desc_block_item">
            <span className="laundry-list-item__desc_block_item_title">
              Payment Type
            </span>
            <div className="laundry-list-item__desc_block_item_body">
              {paymentTypes.map((type, index) => {
                return <PaymentType type={type} key={index} />;
              })}
            </div>
          </div>
          <div className="laundry-list-item__desc_block_item">
            <span className="laundry-list-item__desc_block_item_title">
              Special Services
            </span>
            <div className="laundry-list-item__desc_block_item_body">
              {servicesSplit.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="laundry-list-item__desc_block_item_body_icon"
                  >
                    {services[service]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListLaundry;
