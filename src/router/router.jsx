import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Home from "../views/home/home";
import Swap from "../views/swap/swap";
import Layout from "../App";

export const routerName = {
  home: "",
  swap: "swap",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "swap",
        element: <Swap />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
