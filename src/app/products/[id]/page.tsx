import { IProduct, PageProps } from "@/utils/types";
import React from "react";

async function page({ params }: PageProps) {
  const productId = (await params).id;
  const res = await fetch(`http://localhost:8800/products/${productId}`);
  const product = (await res.json()) as IProduct;

  console.log(product);

  return (
    <div className="grid">
      <div className="col-span-4">
        <img src={product.image} alt={product.title}  />
      </div>
      <div className="col-span-8"></div>
    </div>
  );
}

export default page;
