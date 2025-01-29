import { IProduct, TCart } from "@/utils/types";
import React, { useEffect, useState } from "react";
import AddToBasket from "../templates/AddToBasket";

function CartItem({ id, qty }: TCart) {
  const [cart, setCart] = useState<IProduct | null>(null);

  useEffect(() => {
    const getCartFromBasket = async () => {
      const res = await fetch(`http://localhost:8800/products/${id}`);
      const basket = (await res.json()) as IProduct;
      setCart(basket);
    };

    getCartFromBasket();
  }, [id]);

  const totalItemPrice = cart ? cart.price * qty : 0;

  return (
    <div className="grid grid-cols-12 shadow-md bg-white p-4">
      <div className="col-span-2">
        <img src={cart?.image} alt="test.png" className="w-[150px]" />
      </div>
      <div className="col-span-10 text-left flex flex-col justify-between">
        <div className="space-y-4">
          <h2>name : {cart?.title}</h2>
          <h3>category : {cart?.category}</h3>
          <h4>price : {cart?.price}$</h4>
          <h6>Total Price : ${totalItemPrice}</h6>
        </div>
        <div dir="ltr">
          <AddToBasket id={id} key={id} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
