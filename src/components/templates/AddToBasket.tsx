"use client"
import React from "react";

function AddToBasket() {
  return (
    <div className="flex items-center gap-x-6">
      <button className="bg-sky-600 flex items-center justify-center text-white w-[40px] h-[40px]">
        +
      </button>
      <span>0</span>
      <button className="bg-red-600 flex items-center justify-center text-white w-[40px] h-[40px]">
        -
      </button>
    </div>
  );
}

export default AddToBasket;
