import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalPrice, item) =>
        totalPrice + parseInt(item.price) * parseInt(item.quantity),
      0
    )
);
