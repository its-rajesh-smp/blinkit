import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import Select from "../Components/UI/Select";
import {
  MAIN_CATEGORY,
  PRODUCT,
  PRODUCT_CREATE,
  SUB_CATEGORY,
} from "../Api/endpoints";
import useFetch from "../Hooks/useFetch";
import axios from "axios";

function CreateProduct() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState(1);

  const [state, setState] = useFetch(`${PRODUCT}/${category}/${subCategory}`);

  const onClickAddHandeler = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        images: url,
        description,
        category,
        subcategory: subCategory,
      };
      const { data } = await axios.post(PRODUCT_CREATE, payload);
      setState((p) => [data, ...p]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className=" flex flex-col p-4 gap-4 justify-center items-center">
      <Form className=" w-[50%]">
        <p className="text-3xl text-center">CREATE PRODUCT</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Name"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder=" Images Comma Seperated"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />

        <Select path={MAIN_CATEGORY} onChange={setCategory} value={category} />
        <Select
          path={`${SUB_CATEGORY}/${category}`}
          onChange={setSubCategory}
          value={subCategory}
        />

        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Category
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateProduct;
