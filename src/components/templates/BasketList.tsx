"use client";
import React from "react";
import CartItem from "../modules/CartItem";
import { useShoppingCart } from "@/context/ShoppingCardProvider";

function BasketList() {
  const { cartItems } = useShoppingCart();
  return (
    <div className="space-y-8 my-8" dir="rtl">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default BasketList;
