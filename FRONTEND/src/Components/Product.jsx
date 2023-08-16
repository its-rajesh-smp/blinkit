import React, { useState } from "react";

function Product({ className, data }) {
  const [currentType, setCurrentType] = useState(data.producttypes[0]);

  return (
    <div
      className={`${
        className && className
      } shrink-0 relative bg-white  shadow  h-72 flex p-2 rounded-md  flex-col justify-between border`}
    >
      {/* OUT OF STOCK */}
      {/* <div className=" flex z-10 justify-center items-center opacity-80 absolute top-0 left-0 bg-gray-100 w-full h-full rounded-md">
        <p className=" relative bottom-10 text-xs font-bold text-white bg-slate-700 px-2 py-1  rounded-md">
          Out of Stock
        </p>
      </div> */}

      {/* IMAGE */}
      <div className=" flex justify-center">
        <img
          className=" w-24 h-24 object-cover object-center"
          src={JSON.parse(data.images)[0]}
          alt="product image"
        />
      </div>

      {/* NAME */}
      <p className="  text-sm font-semibold">{data.name}</p>

      {/* OFFER */}
      <div className=" absolute top-0 left-2 w-7 flex justify-center flex-col items-center text-white font-bold">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#256fef"
          ></path>
        </svg>

        <div className=" text-[9px] w-fit h-fit absolute">
          <p>{currentType.discount}%</p>
          <p>OFF</p>
        </div>
      </div>

      {/* TYPE */}
      <select
        onChange={(e) => setCurrentType(JSON.parse(e.target.value))}
        value={JSON.stringify(currentType)}
        className=" text-xs bg-white  font-thin outline-none w-full"
      >
        {data.producttypes &&
          data.producttypes.map((type) => (
            <option value={JSON.stringify(type)} key={type.id}>
              {type.name}
            </option>
          ))}
      </select>

      {/* ADD BUTTON & PRICE */}
      <div className=" flex flex-col gap-2 md:flex-row  justify-between">
        <div className=" flex justify-between items-center md:block">
          <p className=" text-sm font-semibold">
            $
            {Math.ceil(
              currentType.price -
                (currentType.price * currentType.discount) / 100
            )}
          </p>
          <p className=" text-xs  text-gray-600 line-through">
            ${currentType.price}
          </p>
        </div>
        <button className=" bg-green-100 border border-green-700 w-full md:w-16  h-8 rounded-md font-semibold text-green-950  ">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Product;