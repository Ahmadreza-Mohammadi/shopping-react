import { Route, Routes } from "react-router";

import Layout from "@/components/layout/layout";
import LoginPage from "@/pages/login/loginPage";
import SignUpPage from "@/pages/signUp/signUpPage";
import ProfilePage from "@/pages/users/usersPage";

// import { isLogin } from "../api/login.api";
import UserSinglePage from "@/pages/users/userSinglePage";
import HomePage from "../pages/home/home";
import ProductPage from "../pages/product/productPage";
import SalesPage from "../pages/sales/salesPage";
import InventoryPage from "@/pages/inventory/inventoryPage";
import { getFromLocalStorage } from "../utils/utils";

// import { getFromLocalStorage } from "../utils/utils";

import {
  // ADD_PRODUCTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SALE_ROUTE,
  SIGNUP_ROUTE,
  INVENTORY_ROUTE,
  DASHBOARD_ROUTE,
  USERPROFILE_ROUTE,
} from "./const";

function Routing() {
  // const [isUserLogin, setIsUserLogin] = useState(false);

  // useEffect(() => {
  //   const accessToken = getFromLocalStorage("accessToken");
  //   isLogin(accessToken).then((res) => {
  //     if (res === 200) {
  //       setIsUserLogin(true);
  //     } else {
  //       setIsUserLogin(false);
  //     }
  //   });
  //   console.log(accessToken);
  // }, []);

  return (
    <>
      <Routes>
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
          <Route path={SALE_ROUTE} element={<SalesPage />} />
          <Route path={INVENTORY_ROUTE} element={<InventoryPage />} />
          <Route path={PRODUCT_ROUTE} element={<ProductPage />} />
          <Route path={USERPROFILE_ROUTE} element={<UserSinglePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
