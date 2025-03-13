import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;
  console.log(coffee);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffeeInfo = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    console.log(updateCoffeeInfo);

    // Send data to server
    fetch(`https://coffee-crud-server-alpha.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Updated Successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] py-20">
        <Link className="font-bold text-xl ml-44" to={"/"}>
          Back to Home
        </Link>
        <div className="text-center w-1/2 mx-auto ">
          <h2 className="text-3xl font-bold mb-4">
            Update Existing Coffee Details
          </h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="py-10">
            <div className="flex gap-12 justify-between mx-auto flex-1 w-1/2">
              <div>
                <label className="block">
                  <span>Name</span>
                </label>
                <input
                  required
                  defaultValue={name}
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-[350px] p-2 bordered my-4"
                />
                <label className="block">
                  <span>Supplier</span>
                </label>
                <input
                  name="supplier"
                  defaultValue={supplier}
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-[350px] p-2 bordered my-4"
                />
                <label className="block">
                  <span>Category</span>
                </label>
                <input
                  name="category"
                  defaultValue={category}
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-[350px] p-2 bordered my-4"
                />
              </div>
              <div>
                <label className="block">
                  <span>Chef</span>
                </label>
                <input
                  name="chef"
                  defaultValue={chef}
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-[350px] p-2 bordered my-4"
                />
                <label className="block">
                  <span>Taste</span>
                </label>
                <input
                  defaultValue={taste}
                  name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-[350px] p-2 bordered my-4"
                />
                <label className="block">
                  <span>Details</span>
                </label>
                <input
                  defaultValue={details}
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-[350px] p-2 bordered my-4"
                />
              </div>
            </div>
            <div className="mx-auto flex-1 w-1/2">
              <label className="block">
                <span>Photo</span>
              </label>
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                placeholder="Enter photo URL"
                className="w-full p-2 my-4"
              />
              <input
                className="bg-[#D2B48C] font-semibold cursor-pointer border-[#331A15] border p-2 w-full"
                type="submit"
                value="Update Coffee Details"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
