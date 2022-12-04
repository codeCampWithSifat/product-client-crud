import React from "react";
import { useForm } from "react-hook-form";


const Create = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Inserted Your Data Successfully");
        }
      });
  };
  return (
    <div className="container mt-5 w-50 mx-auto">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="my-2"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Gender"
          className="my-2"
          {...register("gender", { required: true })}
        />
        <input
          placeholder="Picture Url Link"
          className="my-2"
          {...register("picture", { required: true })}
        />
        <input
          placeholder="Product Price"
          className="my-2"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          placeholder=""
          className="my-2 btn btn-info"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default Create;
