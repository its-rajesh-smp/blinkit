import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";

function CreateSubCategory() {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const onClickAddHandeler = (e) => {
    e.preventDefault();
    const payload = { name, url, category };
    setState((p) => [payload, ...p]);
  };

  return (
    <div className=" flex flex-col p-4 gap-4 justify-center items-center">
      <Form className=" w-[50%]">
        <p className=" text-3xl text-center">CREATE SUB CATEGORY</p>
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
          placeholder=" Image URL"
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Cloathing</option>
          <option value="">Electronics</option>
        </select>
        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Sub Category
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateSubCategory;
