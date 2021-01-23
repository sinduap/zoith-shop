import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/cart.selector';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../redux/cart/cart.actions';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({
  cartItems,
  totalPrice,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem
        key={cartItem.id}
        cartItem={cartItem}
        removeItem={removeItemFromCart}
        increaseQuantity={increaseItemQuantity}
        decreaseQuantity={decreaseItemQuantity}
      />
    ))}
    <div className="total">
      <span>TOTAL: $ {totalPrice}</span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  increaseItemQuantity: item => dispatch(increaseItemQuantity(item)),
  decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
