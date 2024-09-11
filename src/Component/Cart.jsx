import React, { useContext, useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import { cartContent } from "./Store/ContentProvider";
import { getTotalItems, getTotalPrice } from "./Store/CartReducer";

function Cart() {
  const { cart } = useContext(cartContent);

  // State variables for shipping, tax, and final total
  const [shipping, setShipping] = useState(0.0);
  const [tax, setTax] = useState(0.0);
  const [finalTotal, setFinalTotal] = useState(0.0);

  // Get the base total price from the cart
  const totalPrice = getTotalPrice(cart);
  const isCartEmpty = cart.length === 0;
  // Automatically calculate tax and shipping
  useEffect(() => {
    if (!isCartEmpty) {
      const calculatedTax = totalPrice * 0.08; // Assuming 8% tax
      setTax(calculatedTax);

      // Set shipping to $5 if total price is below $100, otherwise free
      const calculatedShipping = totalPrice >= 100 ? 0.0 : 5.0;
      setShipping(calculatedShipping);

      // Set the final total amount
      setFinalTotal(totalPrice + calculatedShipping + calculatedTax);
    } else {
        setShipping(0.0);
        setTax(0.0);
        setFinalTotal(0.0);}
  }, [ totalPrice,isCartEmpty]);

  return (
    <>
      <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <hr className="border-gray-300 mt-4 mb-8" />
            <div className="space-y-4">
              {cart.map((p) => (
                <div className="grid grid-cols-3 items-center gap-4" key={p.id}>
                  <div className="col-span-2 flex items-center gap-4">
                    <CartProduct product={p} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gray-100 rounded-md p-4 top-0">
              <div className="flex border border-blue-600 overflow-hidden rounded-md">
                <input
                  type="email"
                  placeholder="Promo code"
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
                />
                <button
                  type="button"
                  className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
                >
                  Apply
                </button>
              </div>

              <ul className="text-gray-800 mt-8 space-y-4">
                <li className="flex flex-wrap gap-4 text-base">
                  Total Items{" "}
                  <span className="ml-auto font-bold">
                    {getTotalItems(cart)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Discount <span className="ml-auto font-bold">$0.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Shipping
                  <span className="ml-auto font-bold">
                    ${shipping.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Tax{" "}
                  <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base font-bold">
                  Total{" "}
                  <span className="ml-auto">${finalTotal.toFixed(2)}</span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
