export const getTotalItems = (cart) => {
  return cart.reduce((total, product) => total + product.quantity, 0);
};

// Function to calculate the total price of the items in the cart
export const getTotalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      // Check if the product already exists in the cart
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.product.id
      );

      if (existingProductIndex > -1) {
        // If the product exists, increase its quantity
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // If the product does not exist, add it with a quantity of 1
        return [...state, { ...action.product, quantity: 1 }];
      }

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "Decrease":
      return state.map((p) =>
        p.id === action.id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );

    default:
      return state;
  }
};
