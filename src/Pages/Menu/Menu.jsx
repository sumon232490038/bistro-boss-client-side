import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PopulerMenu from "../Home/PopulerMenu/PopulerMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>

      <Cover coverImg={coverImg} title="Our menu"></Cover>
      <SectionTitle
        heading={`today's offer`}
        subHeading={`Don't miss`}
      ></SectionTitle>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;
