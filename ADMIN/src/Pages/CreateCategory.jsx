import React, { useState } from "react";
import Form from "../Components/UI/Form";
import Container from "../Components/UI/Container";
import useFetch from "../Hooks/useFetch";
import { MAIN_CATEGORY, MAIN_CATEGORY_CREATE } from "../Api/endpoints";
import axios from "axios";

function CreateCategory() {
  const [state, setState] = useFetch(MAIN_CATEGORY);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const onClickAddHandeler = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, image };
      const { data } = await axios.post(MAIN_CATEGORY_CREATE, payload);
      setState((p) => [data, ...p]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className=" flex flex-col p-4 gap-4 justify-center items-center">
      <Form className=" w-[50%]">
        <p className="text-3xl text-center">CREATE CATEGORY</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Name"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder=" Image image"
        />
        <button onClick={onClickAddHandeler} className=" bg-blue-400">
          Add Category
        </button>
      </Form>

      <Container className="w-full" list={state}></Container>
    </div>
  );
}

export default CreateCategory;
