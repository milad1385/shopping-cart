"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import React from "react";

type TAddToBasket = {
  id: String;
};

function AddToBasket({ id }: TAddToBasket) {
  const { handleIncrease, handleDecrease, cartItems } = useShoppingCart();

  console.log(cartItems);

  return (
    <div className="flex items-center gap-x-6">
      <button
        onClick={() => handleIncrease(id)}
        className="bg-sky-600 flex items-center justify-center text-white w-[40px] h-[40px]"
      >
        +
      </button>
      <span>0</span>
      <button
        onClick={() => handleDecrease(id)}
        className="bg-red-600 flex items-center justify-center text-white w-[40px] h-[40px]"
      >
        -
      </button>
    </div>
  );
}

export default AddToBasket;
