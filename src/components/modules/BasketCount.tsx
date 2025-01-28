"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import React from "react";

function BasketCount() {
  const { getAllCartQty } = useShoppingCart();
  return (
    <span className="text-xs flex items-center justify-center rounded-full w-4 h-4 bg-red absolute -top-3 -left-3 bg-blue-700 text-white">
      {getAllCartQty()}
    </span>
  );
}

export default BasketCount;
