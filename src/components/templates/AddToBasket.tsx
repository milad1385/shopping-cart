"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import React, { useEffect, useState } from "react";
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

  const [isLoaded, setIsLoaded] = useState(false);

  const productId = parseInt(id as string);
  const cartQty = getCartQty(productId);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if(!isLoaded){
    return null
  }

  return (
    <div className="flex items-center gap-x-6 mt-5">
      {cartQty >= 1 ? (
        <button
          onClick={() => handleIncrease(productId)}
          className="bg-sky-600 flex items-center justify-center text-white w-[40px] h-[40px]"
        >
          +
        </button>
      ) : (
        <button
          className="bg-sky-600 text-white px-6 py-3"
          onClick={() => handleIncrease(productId)}
        >
          Add To Basket
        </button>
      )}
      <span>{cartQty > 0 && cartQty}</span>
      {cartQty === 1 && (
        <button
          className="bg-red-600 text-white  w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => handleDelete(productId)}
        >
          <FaTrash />
        </button>
      )}

      {cartQty > 1 && (
        <button
          onClick={() => handleDecrease(productId)}
          className="bg-red-600 flex items-center justify-center text-white w-[40px] h-[40px]"
        >
          -
        </button>
      )}
    </div>
  );
}

export default AddToBasket;
