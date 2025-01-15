import { NavLink, Outlet } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="bg-[#D1A054] min-h-screen w-80">
        <ul className="menu  text-base-content min-h-full  p-4 space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <TiHome /> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <ImSpoonKnife />
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <TfiMenuAlt /> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook />
                  MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/AllUser"}>
                  <FaUsers />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <GoHomeFill /> USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendarDays />
                  RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <MdPayment />
                  PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/myCart"}>
                  <FaShoppingCart />
                  MY CART
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addReview"}>
                  <MdReviews />
                  ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>
                  <TbBrandBooking />
                  MY BOOKING
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              HOME
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
