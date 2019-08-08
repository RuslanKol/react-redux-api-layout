import React, { useState } from "react";

import { ReactComponent as CloseImg } from "../../images/delete-button.svg";
import { ReactComponent as AddImg } from "../../images/add-btn.svg";
import { ReactComponent as SubImg } from "../../images/subtract-btn.svg";

import { ReactComponent as DryImg } from "../../images/dry2.svg";

const ProfileDropDownItem = ({ item, addToBusket, showFailed, close }) => {
  const [dry, setDry] = useState(item.cartCountMap[2][1]);
  const [wash, setWash] = useState(item.cartCountMap[1][1]);
  const [ironing, setIroning] = useState(item.cartCountMap[0][1]);

  const prepareItemToBusket = () => {
    const preparedItem = {
      id: item.id,
      image: item.image,
      cartCountMap: item.cartCountMap,
      name: item.name,
      number: item.number,
      price: item.price,
      services: [
        { serviceType: item.cartCountMap[0][0], count: ironing },
        { serviceType: item.cartCountMap[1][0], count: wash },
        { serviceType: item.cartCountMap[2][0], count: dry }
      ]
    };
    addToBusket(preparedItem);
  };

  return (
    <div className="modal">
      <div className="profile-dropdown-item">
        <div className="profile-dropdown-item__container">
          <div className="profile-dropdown-item__container_title">
            <div className="profile-dropdown-item__container_title_img-block">
              <div
                className="profile-dropdown-item__container_title_img-block_shadow"
                onClick={() => showFailed()}
              />
              <div
                className="profile-dropdown-item__container_title_img-block_close"
                onClick={() => close()}
              >
                <CloseImg />
              </div>
              <img
                src={item.image}
                className="profile-dropdown-item__container_title_img-block_img"
                alt="img-block"
                onClick={() => showFailed()}
                width="100%"
              />
              <span className="profile-dropdown-item__container_title_img-block_name">
                {item.name}
              </span>
            </div>
          </div>
          <div className="profile-dropdown-item__container_parameters-block">
            {/* {item.services.map(service => {
              return (
                <div className="profile-dropdown-item__container_parameters-block_param">
                  <div className="profile-dropdown-item__container_parameters-block_param_item">
                    <div className="profile-dropdown-item__container_parameters-block_param_item_icon">
                      <DryImg />
                    </div>
                    <div className="profile-dropdown-item__container_parameters-block_param_item_title">
                      <span className="profile-dropdown-item__container_parameters-block_param_item_title_name">
                        {service.name}
                      </span>
                      <span className="profile-dropdown-item__container_parameters-block_param_item_title_desc">
                        {service.description}
                      </span>
                      <span className="profile-dropdown-item__container_parameters-block_param_item_title_price">
                        {service.cost.toFixed(2)} QR
                      </span>
                    </div>
                    <div className="profile-dropdown-item__container_parameters-block_param_item_counter">
                      <div className="profile-dropdown-item__container_parameters-block_param_item_counter_btn">
                        <AddImg />
                      </div>
                      <span className="profile-dropdown-item__container_parameters-block_param_item_counter_count">
                        3
                      </span>
                      <div className="profile-dropdown-item__container_parameters-block_param_item_counter_btn">
                        <SubImg />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })} */}

            <div className="profile-dropdown-item__container_parameters-block_param">
              <div className="profile-dropdown-item__container_parameters-block_param_item">
                <div className="profile-dropdown-item__container_parameters-block_param_item_icon">
                  <DryImg />
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_title">
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_name">
                    Dry Clean
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_desc">
                    Dry clean, iron and hang
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_price">
                    {(5 * dry).toFixed(2)} QR
                  </span>
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_counter">
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={() => setDry(dry + 1)}
                  >
                    <AddImg />
                  </div>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_counter_count">
                    {dry}
                  </span>
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={dry !==0 ? () => setDry(dry - 1) : null}
                  >
                    <SubImg />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-dropdown-item__container_parameters-block_param">
              <div className="profile-dropdown-item__container_parameters-block_param_item">
                <div className="profile-dropdown-item__container_parameters-block_param_item_icon">
                  <DryImg />
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_title">
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_name">
                    Wash + Iron
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_desc">
                    Dry clean, iron and hang
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_price">
                    {(5 * wash).toFixed(2)} QR
                  </span>
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_counter">
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={() => setWash(wash + 1)}
                  >
                    <AddImg />
                  </div>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_counter_count">
                    {wash}
                  </span>
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={() => setWash(wash - 1)}
                  >
                    <SubImg />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-dropdown-item__container_parameters-block_param">
              <div className="profile-dropdown-item__container_parameters-block_param_item">
                <div className="profile-dropdown-item__container_parameters-block_param_item_icon">
                  <DryImg />
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_title">
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_name">
                    Ironing
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_desc">
                    Dry clean, iron and hang
                  </span>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_title_price">
                    {(5 * ironing).toFixed(2)} QR
                  </span>
                </div>
                <div className="profile-dropdown-item__container_parameters-block_param_item_counter">
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={() => setIroning(ironing + 1)}
                  >
                    <AddImg />
                  </div>
                  <span className="profile-dropdown-item__container_parameters-block_param_item_counter_count">
                    {ironing}
                  </span>
                  <div
                    className="profile-dropdown-item__container_parameters-block_param_item_counter_btn"
                    onClick={() => setIroning(ironing - 1)}
                  >
                    <SubImg />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="profile-dropdown-item__container_add-busket-btn"
            onClick={() => {
              prepareItemToBusket();
            }}
          >
            add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDownItem;
