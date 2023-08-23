import React, { useContext, useEffect, useState } from "react";
import { PRODUCT_SEARCH } from "../../Api/endpoints";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import axios from "axios";
import NotFound from "../UI/NotFound";
import SearchHistoryContext from "../../Context/SearchHistoryContext";

function SearchedProductContainer() {
  const { param } = useSelector((state) => state.searchParamSlice);
  const { setSearchHistoryHandeler } = useContext(SearchHistoryContext);
  const [productsList, setProductList] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                          SEARCHING IN THE BACKEND                          */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (param.trim() == "") {
      setProductList([]);
      return;
    }
    (async () => {
      try {
        const { data } = await axios.get(`${PRODUCT_SEARCH}/${param}`);

        // If Any Data Comes In Response only in that time storing the param as history
        data.length > 0 && setSearchHistoryHandeler(param);

        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [param]);

  return (
    <div className=" flex flex-col gap-6">
      {param.trim() !== "" ? (
        <>
          <h1 className=" text-xl font-medium">
            Showing results for "{param}"
          </h1>

          <div className=" flex justify-center">
            {productsList.length > 0 ? (
              <div className=" h-full  p-2 grid gap-2 bg-gray-100 grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
                {productsList &&
                  productsList.map((product) => {
                    return (
                      <Product
                        className=" w-56"
                        key={product.id}
                        data={product}
                      />
                    );
                  })}
              </div>
            ) : (
              <NotFound
                image="https://blinkit.com/57070263a359a92dc0fe.png"
                hideBtn={true}
                title="No Item Found"
              />
            )}
          </div>
        </>
      ) : (
        <NotFound
          image="https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-6006.jpg?w=740&t=st=1692768537~exp=1692769137~hmac=6bf07fc5fadbae9dc45cf483752f7be3a6b99b2b6a5873d1d1b8bc44e271c8b9"
          hideBtn={true}
          title="Search Something"
        />
      )}
    </div>
  );
}

export default SearchedProductContainer;
