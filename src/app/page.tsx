import Product from "@/components/modules/Product";
import { IProduct } from "@/utils/types";
import React from "react";

async function page() {
  const res = await fetch(`http://localhost:8800/products`);
  const products = (await res.json()) as IProduct[];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 lg:gap-16">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default page;
