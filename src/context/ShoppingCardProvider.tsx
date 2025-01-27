"use client";
import { TCart } from "@/utils/types";
import React, { createContext, useContext, useState } from "react";

type TShoppingCardProvider = {
  children: React.ReactNode;
};

type TShopContext = {
  cartItems: TCart[];
  handleIncrease: (id: string) => void;
};

const ShopContext = createContext({} as TShopContext);

function ShoppingCardProvider({ children }: TShoppingCardProvider) {
  const [carts, setCarts] = useState<TCart[]>([]);

  const handleIncrease = (id: String) => {
    setCarts((cartItems) => {
      const isExsitInbasket = cartItems.find((cart) => cart.id);

      if (!isExsitInbasket) {
        return [...cartItems, { qty: 1, id }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShopContext.Provider value={{ cartItems: carts, handleIncrease }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShoppingCart = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("context was used outside the provider :(");
  }

  return context;
};

export default ShoppingCardProvider;
