"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TCart } from "@/utils/types";
import React, { createContext, useContext, useState } from "react";

type TShoppingCardProvider = {
  children: React.ReactNode;
};

type TShopContext = {
  cartItems: TCart[];
  handleIncrease: (id: number) => void;
  handleDecrease: (id: number) => void;
  handleDelete: (id: number) => void;
  getCartQty: (id: number) => number;
  getAllCartQty: () => number;
};

const ShopContext = createContext({} as TShopContext);

function ShoppingCardProvider({ children }: TShoppingCardProvider) {
  const [carts, setCarts] = useLocalStorage<TCart[]>("carts", []);

  const handleIncrease = (id: number) => {
    setCarts((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecrease = (id: number) => {
    setCarts((currentItems) => {
      const cartQty = currentItems.find((item) => item.id === id)?.qty || 0;

      if (cartQty == 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDelete = (id: number) => {
    setCarts((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const getCartQty = (id: number) => {
    return carts.find((cart) => cart.id === id)?.qty || 0;
  };

  const getAllCartQty = () => {
    return carts.reduce((itemsQty, cartItems) => itemsQty + cartItems.qty, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems: carts,
        handleIncrease,
        handleDecrease,
        handleDelete,
        getCartQty,
        getAllCartQty,
      }}
    >
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
