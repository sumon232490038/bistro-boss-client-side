import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBer from "../Pages/Shared/NavBer/NavBer";

const Main = () => {
  const location = useLocation();
  const noNavberAndFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("/signUp");

  return (
    <div>
      {noNavberAndFooter || <NavBer></NavBer>}
      <Outlet></Outlet>

      {noNavberAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
