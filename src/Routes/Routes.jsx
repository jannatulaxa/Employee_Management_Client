import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ContuctUs from "../Page/ContuctUs/ContuctUs";
import Dashboard from "../Page/Dashboard/Dashboard";
import EMPDashboard from "../Page/Dashboard/EMPDashboard";
import HRDashboard from "../Page/Dashboard/HRDashboard";
import PrivateRoute from "../Private/PrivateRoute";
import UserPage from "../Components/Chart/xmpl";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../../../public/FAQ.json"),
      },
      {
        path: "/ContactUs",
        element: <ContuctUs></ContuctUs>,
      },
      {
        path: "/chart/:id",
        element: <UserPage></UserPage>,
      },
      {
        path: "/Dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/HRDashboard",
        element: <PrivateRoute><HRDashboard></HRDashboard></PrivateRoute>,
      },
      {
        path: "/EMPDashboard",
        element: <PrivateRoute><EMPDashboard></EMPDashboard></PrivateRoute> ,
      },
      {
        path: "/workSheet",
        element: <PrivateRoute><EMPDashboard></EMPDashboard></PrivateRoute> ,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
