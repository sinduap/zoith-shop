import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
        &#10094;
      </div>
      <div className="value">{cartItem.quantity}</div>
      <div className="arrow" onClick={() => increaseQuantity(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">$ {cartItem.price * cartItem.quantity}</span>
    <div className="remove-button" onClick={() => removeItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

export default CheckoutItem;
