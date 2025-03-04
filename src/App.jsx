import { useRoutes } from "react-router-dom";
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


// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },
            {
              path: "/checkout",
              element : <CheckoutPage></CheckoutPage>
            },
            {
              path: "/kontakt",
              element : <KontaktPage></KontaktPage>
            },
            {
              path: "/om",
              element : <OmPage></OmPage>
            },
            {
              path: "/services",
              element : <ServicesPage></ServicesPage>
            },
            {
              path: "/shop",
              element : <ShopPage></ShopPage>
            },
            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <div>
            {routes}
        </div>
        <Footer></Footer>
    </div>
  </>;

}

export default App;
