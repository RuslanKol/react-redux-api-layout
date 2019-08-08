import React from "react";

const ProfileItem = ({ id, image, number, name, price, services, onClick, parentCategoryId, totalCount, cartCountMap }) => {
  const item = {
    id: id,
    image: image,
    number: number,
    name: name,
    price: price,
    services: services,
    parentCategoryId: parentCategoryId,
    totalCount: totalCount,
    cartCountMap: cartCountMap,
  };
  return (
    <div className="profile-item" onClick={() => onClick(item)}>
      <div className="profile-item__image">
        <img src={item.image} alt="profile-item__image" />
      </div>
      <div className="profile-item__shadow" />
      <div className="profile-item__bookmark">{item.totalCount}</div>
      <div className="profile-item__block">
        <div className="profile-item__block_name-price">
          <div className="profile-item__block_name-price_name">{item.name}</div>
          <div className="profile-item__block_name-price_price">
            From {item.price} QR
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
