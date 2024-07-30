import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home.page";
import MyCartPage from "../pages/MyCart.page";
import ProductDetailPage from "../pages/ProductDetail.page";
import MainComponents from "../components/Main.components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/my-cart",
        element: <MyCartPage />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
