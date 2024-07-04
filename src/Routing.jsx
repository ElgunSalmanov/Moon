import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Chat from "./pages/chat/Chat";
import Contact from "./pages/contact/Contact";
import Distributors from "./pages/distributors/Distributors";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import OrderPolicy from "./pages/order-policy/OrderPolicy";
import Order from "./pages/order/Order";
import Privacy from "./pages/privacy/Privacy";
import Returns from "./pages/returns/Returns";
import Shipping from "./pages/shipping/Shipping";
import Terms from "./pages/terms/Terms";
import Warranty from "./pages/warranty/Warranty";
import NotFound from "./pages/not-found/NotFound";
import Login from "./shared/login/Login";

function Routing() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/where-to-buy",
          element: <Locations />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/shop",
          element: <Order />,
        },
        {
          path: "/terms-of-use",
          element: <Terms />,
        },
        {
          path: "/privacy-policy",
          element: <Privacy />,
        },
        {
          path: "/limited-warranty",
          element: <Warranty />,
        },
        {
          path: "/pre-order-policy",
          element: <OrderPolicy />,
        },
        {
          path: "/returns",
          element: <Returns />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/distributors",
          element: <Distributors />,
        },
      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const Elements = () => {
    return useRoutes(routes);
  };

  return (
    <>
      <BrowserRouter>
        <Elements />
      </BrowserRouter>
    </>
  );
}

export default Routing;
