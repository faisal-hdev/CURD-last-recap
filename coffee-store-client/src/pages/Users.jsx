import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "./../../node_modules/react-hot-toast/src/index";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    fetch(`http://localhost:9000/user/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("User Deleted Successful.", {
            style: {
              border: "2px solid #713200",
              padding: "16px",
              color: "#713200",
              fontSize: "18px",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          // Remove the uer from the ui
          const remainingUser = users.filter((user) => user?._id !== id);
          setUsers(remainingUser);
        }
      });
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "Are you sure that you want to delete it?",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       console.log("Delete Confirm");
    //       fetch(`http://localhost:9000/user/${_id}`, { method: "delete" })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           console.log(data);
    //           if (data.deletedCount > 0) {
    //             Swal.fire({
    //               title: "Good Luck !!!",
    //               text: "Deleted coffee details",
    //               icon: "success",
    //             });
    //             const remaining = coffees.filter((cof) => cof._id !== _id);
    //             setCoffees(remaining);
    //           }
    //         });
    //     }
    //   });
    // };
  };

  console.log(users);
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mt-24">
        <Link className="font-bold text-xl ml-44" to={"/"}>
          Back to Home
        </Link>
        <div className="flex-1 text-center py-20">
          <h2 className="text-3xl">
            Here are all loadedUsers : {loadedUsers.length}
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            aspernatur autem sapiente. Rem asperiores aliquid deserunt
            aspernatur vitae et quos!
          </p>
        </div>
        <div>
          <div className="overflow-x-auto container mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Last logged in</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.createdAt || "N/A"}</td>
                    <td></td>
                    <td>
                      <button
                        onClick={() => handleDelete(user?._id)}
                        className="btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
