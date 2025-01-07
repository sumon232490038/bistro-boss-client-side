import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import ItemsMenu from "../../Shared/ItemsMenu/ItemsMenu";

const PopulerMenu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filter1 = data.filter(
          (product) => product.category === "popular"
        );
        setItems(filter1);
      });
  }, []);
  console.log(items);
  return (
    <section>
      <SectionTitle
        subHeading={"Cheack it Out"}
        heading={"Form our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {items.map((item) => (
          <ItemsMenu key={item._id} item={item}></ItemsMenu>
        ))}
      </div>
    </section>
  );
};

export default PopulerMenu;
