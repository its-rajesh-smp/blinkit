import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import Select from "../Components/UI/Select";

function CreateProductType() {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productId, setProductId] = useState(0);

  const onClickAddHandeler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      price: +price,
      discount: +discount,
      productId: +productId,
    };
    setState((p) => [payload, ...p]);
  };

  return (
    <div className=" flex flex-col p-4 gap-4 justify-center items-center">
      <Form className=" w-[50%]">
        <p className="text-3xl text-center">CREATE PRODUCT TYPE</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Name"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Price"
        />
        <input
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          type="text"
          placeholder="Discount"
        />

        <Select onChange={setCategory} value={category} />
        <Select onChange={setSubCategory} value={subCategory} />
        <Select onChange={setProductId} value={productId} />

        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Product Type
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateProductType;
