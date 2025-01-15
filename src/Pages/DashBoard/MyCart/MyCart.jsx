import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
          subHeading="My Cart"
          heading="WANNA ADD MORE?"
        ></SectionTitle>
      </div>
      <div className="flex items-center text-3xl justify-evenly">
        <h1>TOTAL ORDERS:{cart.length}</h1>
        <h1>TOTAL PRICE:${totalPrice}</h1>
        <button className="btn bg-[#D1A054] text-white ">bay</button>
      </div>
      {/* table */}
      <div
        className="overflow-x-auto w-10/12 mx-auto mt-2 rounded-t-lg
      "
      >
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white  ">
            <tr>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <th>${item.price}</th>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default MyCart;
