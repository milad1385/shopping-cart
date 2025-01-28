"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import React from "react";
import { FaTrash } from "react-icons/fa";

type TAddToBasket = {
  id: String;
};

function AddToBasket({ id }: TAddToBasket) {
  const {
    handleIncrease,
    handleDecrease,
    cartItems,
    getCartQty,
    handleDelete,
  } = useShoppingCart();

  console.log(cartItems);

  return (
    <div className="flex items-center gap-x-6 mt-5">
      {getCartQty(id) >= 1 ? (
        <button
          onClick={() => handleIncrease(id)}
          className="bg-sky-600 flex items-center justify-center text-white w-[40px] h-[40px]"
        >
          +
        </button>
      ) : (
        <button
          className="bg-sky-600 text-white px-6 py-3"
          onClick={() => handleIncrease(id)}
        >
          Add To Basket
        </button>
      )}
      <span>{getCartQty(id) > 0 && getCartQty(id)}</span>
      {getCartQty(id) === 1 && (
        <button
          className="bg-red-600 text-white  w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => handleDelete(id)}
        >
          <FaTrash />
        </button>
      )}

      {getCartQty(id) > 1 && (
        <button
          onClick={() => handleDecrease(id)}
          className="bg-red-600 flex items-center justify-center text-white w-[40px] h-[40px]"
        >
          -
        </button>
      )}
    </div>
  );
}

export default AddToBasket;
