import React from "react";

const PaymentType = props => {
  return (
    <div className={`payment-type payment-type-${props.type}`}>
      <span className="payment-type__text">{props.type}</span>
    </div>
  );
};

export default PaymentType;
