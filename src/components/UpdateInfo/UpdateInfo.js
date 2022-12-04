import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const UpdateInfo = () => {
    const { register, handleSubmit } = useForm();
    const {id} = useParams()
    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://product-server-crud-production.up.railway.app/${id}` , {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            alert("Update Your Data Successfully")
        })
    }
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
          value="Update Product Info"
        />
      </form>
    </div>
  )
}

export default UpdateInfo
