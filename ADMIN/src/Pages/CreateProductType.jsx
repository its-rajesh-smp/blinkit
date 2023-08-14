import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import Select from "../Components/UI/Select";
import {
  MAIN_CATEGORY,
  PRODUCT,
  PRODUCT_TYPE,
  PRODUCT_TYPE_CREATE,
  SUB_CATEGORY,
} from "../Api/endpoints";
import useFetch from "../Hooks/useFetch";

function CreateProductType() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState(1);
  const [productId, setProductId] = useState(1);

  const [state, setState] = useFetch(`${PRODUCT_TYPE}/${productId}`);

  const onClickAddHandeler = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        price: +price,
        discount: +discount,
        productId: +productId,
      };
      const { data } = await axios.post(PRODUCT_TYPE_CREATE, payload);
      setState((p) => [data, ...p]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
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

        <Select path={MAIN_CATEGORY} onChange={setCategory} value={category} />
        <Select
          path={`${SUB_CATEGORY}/${category}`}
          onChange={setSubCategory}
          value={subCategory}
        />
        <Select
          path={`${PRODUCT}/${subCategory}`}
          onChange={setProductId}
          value={productId}
        />

        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Product Type
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateProductType;
