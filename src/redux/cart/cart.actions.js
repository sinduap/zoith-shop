import { CartActionTypes } from './cart.types';

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const increaseItemQuantity = item => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = item => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});
