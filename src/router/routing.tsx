import { Navigate, Route, Routes } from "react-router";

import Layout from "@/components/layout/layout";
import LoginPage from "@/pages/login/loginPage";
import ProfilePage from "@/pages/users/usersPage";
import SignUpPage from "@/pages/signUp/signUpPage";
// import { useEffect, useState } from "react";
// import { isLogin } from "../api/login.api";
import HomePage from "../pages/home/home";
import ProductPage from "../pages/product/productPage";
import SalesPage from "../pages/sales/salesPage";
// import { getFromLocalStorage } from "../utils/utils";
import {
  DASHBOARD_ROUTE,
  // ADD_PRODUCTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SALE_ROUTE,
  SIGNUP_ROUTE,
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
          <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
          <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
          <Route path={DASHBOARD_ROUTE} element={<HomePage />} />
          <Route path={SALE_ROUTE} element={<SalesPage />} />
          <Route path={PRODUCT_ROUTE} element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
