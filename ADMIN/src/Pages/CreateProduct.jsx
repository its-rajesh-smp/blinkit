import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import Select from "../Components/UI/Select";

function CreateProduct() {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const onClickAddHandeler = (e) => {
    e.preventDefault();
    const payload = { name, url, description, category, subCategory };
    setState((p) => [payload, ...p]);
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

        <Select onChange={setCategory} value={category} />
        <Select onChange={setSubCategory} value={subCategory} />

        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Category
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateProduct;
