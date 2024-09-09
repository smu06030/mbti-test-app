import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/public/Home";
import { PATH } from "../constants/path";
import PublicRoutes from "./PublicRoutes";
import Login from './../pages/public/Login';
import PrivateRoutes from "./PrivateRoutes";
import Register from './../pages/public/Register';
import Test from './../pages/private/Test';
import Results from './../pages/private/Results';
import Profile from './../pages/private/Profile';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <Layout />,
      children: [
        { 
          index: true,
          element: <Home />
        },
        {
          element: <PublicRoutes />,
          children: [
            { 
              path: PATH.LOGIN,
              element: <Login />
            },
            { 
              path: PATH.REGISTER,
              element: <Register />
            },
          ]
        },
        {
          element: <PrivateRoutes />,
          children: [
            { 
              path: PATH.TEST,
              element: <Test />
            },
            { 
              path: PATH.RESULTS,
              element: <Results />
            },
            { 
              path: PATH.PROFILE,
              element: <Profile />
            },
          ]
        },
      ]
    }
  ])
  
  return <RouterProvider router = {router}/>
}

export default Router;
