import React, { useContext, useState } from "react";
import { cartContent } from "./Store/ContentProvider";

function Product({ product }) {
  const { cart, dispatch } = useContext(cartContent);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      // Display error message
      setErrorMessage("Item is already in the cart");
    } else {
      // Add the product to the cart
      dispatch({ type: "Add", product });
      setErrorMessage(""); // Clear any previous error messages
    }
  };

  return (
    <div className="bg-transparent p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
      <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={product.image}
          alt="product1"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
        <div className="text-center">
          <h3 className="text-base font-bold text-gray-800">{product.title}</h3>
          <h4 className="text-lg text-blue-600 font-bold mt-2">${product.price}</h4>
        </div>

        <div className="flex justify-center space-x-1 mt-4">
          <button
            onClick={handleAddToCart}
            type="button"
            className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
          >
            Add to cart
          </button>
        </div>

        {errorMessage && (
          <div className="text-red-500 mt-2 text-center">{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default Product;
