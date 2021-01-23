export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removedItem) => {
  return cartItems.filter(cartItem => cartItem.id !== removedItem.id);
};

export const increaseItemQuantity = (cartItems, increasedItem) => {
  return cartItems.map(cartItem =>
    cartItem.id === increasedItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseItemQuantity = (cartItems, decreasedItem) => {
  return cartItems.map(cartItem =>
    cartItem.id === decreasedItem.id
      ? decreasedItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
      : cartItem
  );
};
