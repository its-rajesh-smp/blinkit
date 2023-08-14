import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import {
  MAIN_CATEGORY,
  SUB_CATEGORY,
  SUB_CATEGORY_CREATE,
} from "../Api/endpoints";
import axios from "axios";
import Select from "../Components/UI/Select";
import useFetch from "../Hooks/useFetch";

function CreateSubCategory() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(1);

  const [state, setState] = useFetch(`${SUB_CATEGORY}/${category}`);

  const onClickAddHandeler = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, image: url, category };
      console.log(payload);
      const { data } = await axios.post(SUB_CATEGORY_CREATE, payload);
      setState((p) => [data, ...p]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
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

        <Select path={MAIN_CATEGORY} onChange={setCategory} value={category} />

        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Sub Category
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateSubCategory;
