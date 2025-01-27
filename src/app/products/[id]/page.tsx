import AddToBasket from "@/components/templates/AddToBasket";
import { IProduct, PageProps } from "@/utils/types";
import React from "react";

async function page({ params }: PageProps) {
  const productId = (await params).id;
  const res = await fetch(`http://localhost:8800/products/${productId}`);
  const product = (await res.json()) as IProduct;

  console.log(product);

  return (
    <div className=" grid grid-cols-12 mt-16 container gap-x-6 shadow-md p-8 bg-white">
      <div className="col-span-12 lg:col-span-10 flex flex-col justify-between">
        <div className="space-y-4">
          <h2>name     : {product.title}</h2>
          <h3>category : {product.category}</h3>
          <h4>price    :{product.price} $</h4>
        </div>
        <AddToBasket id={productId}/>
      </div>
      <div className="mx-auto md:mx-0 col-span-12 lg:col-span-2">
        <img src={product.image} alt={product.title} className="w-[200px]" />
      </div>
    </div>
  );
}

export default page;
