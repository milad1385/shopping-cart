"use client";
import { useShoppingCart } from "@/context/ShoppingCardProvider";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartItem from "../modules/CartItem";
import { useEffect, useState } from "react";
import { IProduct } from "@/utils/types";
import Link from "next/link";

function BasketList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useShoppingCart();

  useEffect(() => {
    const fetchCartDetails = async () => {
      let total = 0;
      for (const item of cartItems) {
        const res = await fetch(`http://localhost:8800/products/${item.id}`);
        const basket = (await res.json()) as IProduct;
        total += basket.price * item.qty;
      }
      setTotalPrice(total);
      setIsLoaded(true);
    };

    fetchCartDetails();
  }, [cartItems]);

  if (!isLoaded) {
    return <div>Loading ....</div>;
  }

  return (
    <>
      <div className="space-y-8 my-16" dir="rtl">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <div className="bg-blue-900 shadow-md mt-24 text-white flex items-center justify-center flex-col gap-y-8 py-5">
            <HiOutlineShoppingCart className="text-[120px]" />
            <h3 className="text-2xl">Your basket is Empty</h3>
            <Link
              href="/"
              className="block px-4 py-2 bg-white text-blue-900 shadow-2xl"
            >
              Back To Shop{" "}
            </Link>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-10 shadow-md bg-white py-6 px-5 space-y-6">
          <p>Total Price : ${totalPrice}</p>
          <button className="px-4 py-2 bg-blue-900 text-white shadow-md">Check Out</button>
        </div>
      )}
    </>
  );
}

export default BasketList;
