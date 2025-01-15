import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/MenuHook/useMenu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="mx-auto">
      <div>
        <SectionTitle
          subHeading="Hurry Up!"
          heading="MANAGE ALL Items"
        ></SectionTitle>
      </div>
      <div className="w-11/12 mx-auto text-3xl ">
        <h1>TOTAL USERS:{menu.length}</h1>
      </div>
      <div
        className="overflow-x-auto w-11/12 mx-auto mt-2 rounded-t-lg
            "
      >
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white  ">
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <th>${item.price}</th>
                <th>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    {" "}
                    <button className="btn bg-[#D1A054] text-white">
                      <FaRegEdit />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-2xl text-red-600 btn "
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
