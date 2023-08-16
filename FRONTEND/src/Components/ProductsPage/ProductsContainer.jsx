import React, { useContext } from "react";
import Product from "../Product";
import ProductPageContext from "../../Context/ProductPageContext";

function ProductsContainer() {
  const { productsList } = useContext(ProductPageContext);
  return (
    productsList && (
      <div className=" h-full  p-2 grid gap-2 bg-gray-100 grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
        {productsList.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    )
  );
}

export default ProductsContainer;
