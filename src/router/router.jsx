import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Home from "../views/home/home";
import Swap from "../views/swap/swap";
import Layout from "../App";
import Test from "../views/test/test";
import { Navigate } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
export const routerName = {
  home: "",
  swap: "swap",
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "swap",
        element: <Swap />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "*",
        element: <Navigate to="" />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}  fallbackElement={<p>Loading...</p>} />;
}
