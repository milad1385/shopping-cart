"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartItem from "../modules/CartItem";
import { useEffect, useState } from "react";

function BasketList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cartItems } = useShoppingCart();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="space-y-8 my-8" dir="rtl">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <div className="bg-blue-900 shadow-md mt-24 text-white flex items-center justify-center flex-col gap-y-8 py-5">
          <HiOutlineShoppingCart className="text-[120px]" />
          <h3 className="text-2xl">Your basket is Empty</h3>
        </div>
      )}
    </div>
  );
}

export default BasketList;
