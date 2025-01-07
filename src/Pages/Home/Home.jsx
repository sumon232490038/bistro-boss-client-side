import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
