import React from "react";
import { withRouter } from "react-router";

import { ReactComponent as LeftArrow } from "../../images/left-arrow.svg";
import { ReactComponent as NotificationIcon } from "../../images/notification-icon.svg";
import { ReactComponent as SettingsIcon } from "../../images/settings-icon.svg";
import { ReactComponent as FavoritesIcon } from "../../images/favorites-icon.svg";
import { ReactComponent as GoCreditIcon } from "../../images/gocredit-icon.svg";
import { ReactComponent as OrdersIcon } from "../../images/orders-icon.svg";

const UserMenu = props => {
  const goTo = link => {
    props.history.push(link);
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
  }

  return (
    <div className="user-menu">
      <div className="user-menu__container">
        <div className="user-menu__container_e-wallet">
          <span className="user-menu__container_e-wallet_text">
            eWallet: 1200 QR
          </span>
          <div className="user-menu__container_e-wallet_arrow">
            <LeftArrow />
          </div>
        </div>
        <div className="user-menu__container_menu-list">
          <div
            className="user-menu__container_menu-list_item"
            onClick={() => goTo("/notifications")}
          >
            <div className="user-menu__container_menu-list_item_icon">
              <NotificationIcon />
            </div>
            <span className="user-menu__container_menu-list_item_text">
              Notification
            </span>
          </div>
          <div
            className="user-menu__container_menu-list_item"
            onClick={() => goTo("/settings")}
          >
            <div className="user-menu__container_menu-list_item_icon">
              <SettingsIcon />
            </div>
            <span className="user-menu__container_menu-list_item_text">
              Settings
            </span>
          </div>
          <div
            className="user-menu__container_menu-list_item"
            onClick={() => goTo("/favourites")}
          >
            <div className="user-menu__container_menu-list_item_icon">
              <FavoritesIcon />
            </div>
            <span className="user-menu__container_menu-list_item_text">
              Favorites
            </span>
          </div>
          <div
            className="user-menu__container_menu-list_item"
            onClick={() => goTo("/gocredit")}
          >
            <div className="user-menu__container_menu-list_item_icon">
              <GoCreditIcon />
            </div>
            <span className="user-menu__container_menu-list_item_text">
              Go Credit
            </span>
          </div>
          <div
            className="user-menu__container_menu-list_item"
            onClick={() => goTo("/orders")}
          >
            <div className="user-menu__container_menu-list_item_icon">
              <OrdersIcon />
            </div>
            <span className="user-menu__container_menu-list_item_text">
              Orders
            </span>
          </div>
          <div
            className="user-menu__container_menu-list_item"
            onClick={handleLogOut}
          >
            <div className="user-menu__container_menu-list_item_icon" />
            <span className="user-menu__container_menu-list_item_text">
              Log out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default withRouter(UserMenu);
