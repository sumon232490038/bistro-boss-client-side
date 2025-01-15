import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_IMGBB_HOSTING_KEY;
const imgbb_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddITems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const img_file = { image: data.image[0] };
    // console.log(data, img_file);
    const res = await axiosPublic.post(imgbb_hosting_api, img_file, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Item is added to a menu!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-7">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name")}
              required
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6 flex-col md:flex-row">
            {/* category input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category")}
                required
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  seclect a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soups">soups</option>
                <option value="desserts">desserts</option>
                <option value="drinks">drinks</option>
              </select>
            </label>
            {/* price input */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price")}
                required
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <label className="form-control w-full">
            <input
              type="file"
              {...register("image")}
              required
              className="file-input w-full max-w-xs"
            />
          </label>

          <button className="btn btn-neutral">
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddITems;
