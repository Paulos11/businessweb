import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Rootlayout from "./pages/Rootlayout";
import Pricing from "./pages/Pricing";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/Pricing",
          element: <Pricing />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />{" "}
    </div>
  );
};
export default App;
