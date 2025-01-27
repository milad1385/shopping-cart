import { IProduct } from "@/utils/types";
import Link from "next/link";
import React from "react";

function Product({
  title,
  rating: { count, rate },
  price,
  image,
  id,
  description,
  category,
}: IProduct) {
  return (
    <div className="shadow p-5 space-y-4 cursor-pointer bg-white">
      <div>
        <Link href={`/products/${id}`}>
          <img className="h-[180px] mx-auto" src={image} alt={title} />
        </Link>
      </div>
      <h2 className="line-clamp-1">{title}</h2>
      <h3>{price.toLocaleString("en-US")} $</h3>
      <Link href={`/products/${id}`} className="bg-blue-700 text-white flex items-center justify-center py-3">See More</Link>
    </div>
  );
}

export default Product;
