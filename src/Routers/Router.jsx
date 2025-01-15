import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PrivateCard from "../Pages/Shared/PrivateCard/PrivateCard";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUser from "../Pages/DashBoard/AllUsers/AllUser";
import AdminRoute from "./AdminRoute";
import AddITems from "../Pages/DashBoard/AddITems/AddITems";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItems from "../Pages/UpdateItems/UpdateItems";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:id",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <PrivateCard></PrivateCard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      // local user routes
      {
        path: "/dashboard/myCart",
        element: <MyCart></MyCart>,
      },
      // admin user routes
      {
        path: "/dashboard/AllUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddITems></AddITems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/updateItem/${params.id}`),
      },
    ],
  },
]);

export default router;
