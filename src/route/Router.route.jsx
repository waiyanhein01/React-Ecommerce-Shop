import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home.page";
import MyCartPage from "../pages/MyCart.page";
import ProductDetailPage from "../pages/ProductDetail.page";
import MainComponents from "../components/Main.components";
import ErrorPage from "../pages/Error.page";
import ShopPage from "../pages/Shop.page";
import FeaturePage from "../pages/Feature.page";
import { ContactPage } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/feature",
        element: <FeaturePage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/my-cart",
        element: <MyCartPage />,
      },
      {
        path: "/product-detail/:productSlug",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
