import { Helmet } from "react-helmet-async";

import coverImg from "../../assets/menu/banner3.jpg";
import dessertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzasImg from "../../assets/menu/pizza-bg.jpg";
import soupsImg from "../../assets/menu/soup-bg.jpg";
import saladsImg from "../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Hooks/MenuHook/useMenu";
import Cover from "../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((product) => product.category === "offered");
  const desserts = menu.filter((product) => product.category === "dessert");
  const pizzas = menu.filter((product) => product.category === "pizza");
  const soups = menu.filter((product) => product.category === "soup");
  const salads = menu.filter((product) => product.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      {/* Menu cover */}
      <Cover coverImg={coverImg} title={"OUR MENU"}></Cover>
      <SectionTitle
        heading={`today's offer`}
        subHeading={`Don't miss`}
      ></SectionTitle>
      {/* Offers */}
      <MenuCategory items={offered} coverImg={coverImg}></MenuCategory>
      {/* Desserts */}
      <MenuCategory
        items={desserts}
        coverImg={dessertsImg}
        title={"DESSERTS"}
      ></MenuCategory>
      {/* Pizza*/}
      <MenuCategory
        items={pizzas}
        coverImg={pizzasImg}
        title={"PIZZA"}
      ></MenuCategory>
      {/* salads */}
      <MenuCategory
        items={salads}
        coverImg={saladsImg}
        title={"SALAD"}
      ></MenuCategory>
      {/* Soups */}
      <MenuCategory
        items={soups}
        coverImg={soupsImg}
        title={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
