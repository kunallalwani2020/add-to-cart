import React, { useState } from "react";
import Data from "../Data.json";
import Product from "./Product";
function ProductList() {
  const [product, SetProduct] = useState(Data.products);
  return (
    <>
      <div class="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Top Products
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">
          {product.map((p) => {
            return <Product product={p} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
