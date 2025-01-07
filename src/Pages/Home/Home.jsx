import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Reviews from "./Reviews/Reviews";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <SectionTitle
        subHeading={"Cheack it Out"}
        heading={"Form our menu"}
      ></SectionTitle>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
