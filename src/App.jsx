import { useRoutes, useLocation } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import KontaktPage from "./pages/kontakt/KontaktPage";
import OmPage from "./pages/om/OmPage";
import ServicesPage from "./pages/services/ServicesPage";
import ShopPage from "./pages/shop/ShopPage";

// Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import BackOffice from "./pages/backoffice/BackOffice";
import ProductForm from "./components/ProductForm/ProductForm";

const App = () => {
  const location = useLocation();
  const isBackOffice = location.pathname.startsWith("/backoffice");

  // Setting Up Routes
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/kontakt", element: <KontaktPage /> },
    { path: "/om", element: <OmPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/shop", element: <ShopPage /> },
    {
      path: "/backoffice",
      element: <BackOffice />, // Uses Outlet to handle nested routes
      children: [{ path: "products", element: <ProductForm /> }],
    },
    { path: "*", element: <div>NOT FOUND</div> },
  ]);

  return (
    <div>
      {!isBackOffice && <Navigation />}
      <div>{routes}</div>
      {!isBackOffice && <Footer />}
    </div>
  );
};

export default App;
