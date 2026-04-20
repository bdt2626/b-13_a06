"use client"; 
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ addToCart, setAddToCart }) => {
  const total = addToCart?.reduce((acc, item) => {
  const cleanPrice = item.price.replace(/[^0-9.]/g, "");
    return acc + (parseFloat(cleanPrice) || 0);
    }, 0) || 0;

  const handleRemove = (id) => {
    setAddToCart(addToCart.filter((item) => item.id !== id));
     toast.info("Removed from cart");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="card w-full max-w-2xl bg-white shadow-xl border border-gray-50 p-8 rounded-4xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Cart</h2>

        <div className="space-y-4">
          {addToCart && addToCart.length > 0 ? (
            addToCart.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center justify-between p-5 bg-slate-50/60 rounded-2xl"
              >
                <div className="flex items-center gap-5">
                  <img src={item.iconPath}   alt={item.title}    className="w-8 h-8 object-contain"  />
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                    <p className="text-slate-400 font-medium">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-ghost btn-sm text-pink-500 hover:bg-transparent hover:text-pink-600 font-semibold lowercase"
                >
                  Remove
                  
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-400 italic">Your cart is empty</p>
            </div>
          )}
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center mb-8 px-2">
            <span className="text-slate-400 font-medium text-lg">Total:</span>
            <span className="text-3xl font-extrabold text-slate-900">${total}</span>
          </div>

          <button 
            disabled={addToCart?.length === 0}
            className="btn btn-block h-16 rounded-2xl border-none bg-[#7C3AED] hover:bg-[#6D28D9] disabled:bg-slate-200 text-white text-lg font-bold normal-case shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;