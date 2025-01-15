import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return result.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `the ${user.name} is add in admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="mx-auto">
      <div>
        <SectionTitle
          subHeading="How Many"
          heading="MANAGE ALL USERS"
        ></SectionTitle>
      </div>
      <div className="w-11/12 mx-auto text-3xl ">
        <h1>TOTAL USERS:{users.length}</h1>
      </div>
      {/* table */}
      <div
        className="overflow-x-auto w-11/12 mx-auto mt-2 rounded-t-lg
      "
      >
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white  ">
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <th>{user.email}</th>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-[#D1A054] text-white"
                    >
                      <FaUsers />
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUser;
