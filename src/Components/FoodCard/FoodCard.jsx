import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const Navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const { image, name, price, recipe, _id } = item;
  const handleCardData = () => {
    if (user && user.email) {
      const newFood = {
        menuId: _id,
        userEmail: user.email,
        name,
        price,
        image,
      };

      axiosSecure.post("/carts", newFood).then(() => {
        Swal.fire(
          {
            position: "top-end",
            icon: "success",
            title: `Your ${name} item has been saved`,
            showConfirmButton: false,
            timer: 1500,
          },
          refetch()
        );
      });
    } else {
      Swal.fire({
        title: "Your Not Logged",
        text: "Please Login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <p className="absolute  bg-black p-2 text-white rounded-md top-3 right-5">
          ${price}
        </p>
        <figure>
          <img src={image} alt="Shoes" />
        </figure>

        <div className="card-body items-center justify-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button
              onClick={handleCardData}
              className="btn btn-outline border-0 border-b-4  mb-9 uppercase"
            >
              Add TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
