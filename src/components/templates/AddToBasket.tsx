"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

type TAddToBasket = {
  id: number;
};

function AddToBasket({ id }: TAddToBasket) {
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    handleIncrease,
    handleDecrease,
    getCartQty,
    handleDelete,
  } = useShoppingCart();


  const cartQty = getCartQty(id);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-6 mt-5">
      {cartQty >= 1 ? (
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
      <span>{cartQty > 0 && cartQty}</span>
      {cartQty === 1 && (
        <button
          className="bg-red-600 text-white  w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => handleDelete(id)}
        >
          <FaTrash />
        </button>
      )}

      {cartQty > 1 && (
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
