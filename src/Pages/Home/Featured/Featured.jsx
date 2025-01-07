import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className=" featured-css featured-item bg-fixed text-white">
      <div className="bg-black bg-opacity-40 p-10 my-20 md:py-28  md:px-20  lg:px-60">
        <SectionTitle
          heading="form our menu"
          subHeading="check it out"
        ></SectionTitle>
        <div className="md:flex gap-8 justify-center items-center  ">
          <img src={featuredImg} className="w-[350px] " alt="" />
          <div className="text-white">
            <h3>March 20,2023</h3>
            <h1 className="uppercase">Where can i get some?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
