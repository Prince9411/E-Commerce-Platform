import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removefromCart } = useContext(CartContext);

  return (
    <div className="p-6 text-black text-xl">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      {cart.length === 0 ? ( 
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded bg-gray-100 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Rs.{item.price}</p>
              </div>
              <button
                onClick={() => removefromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
