import React from "react";

const FoodCard = ({ item }) => {
  const { category, image, name, price, recipe } = item;
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
            <button className="btn btn-outline border-0 border-b-4  mb-9 uppercase">
              Add TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
