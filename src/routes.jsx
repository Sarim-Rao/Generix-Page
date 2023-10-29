import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./Pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
