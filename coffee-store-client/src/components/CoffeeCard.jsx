import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    // fetch(`http://localhost:9000/coffee/${_id}`, { method: "delete" })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Data is deleted", data);
    //   });
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete Confirm");
        fetch(`http://localhost:9000/coffee/${_id}`, { method: "delete" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Good Luck !!!",
                text: "Deleted coffee details",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-72 h-72" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>Category : {category}</p>
        <p>Supplier : {supplier}</p>
        <p>Chef : {chef}</p>
        <p>Taste : {taste}</p>
        <p>Details : {details}</p>
        <div className="card-actions justify-end mt-6">
          <button className="btn btn-neutral">View</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
