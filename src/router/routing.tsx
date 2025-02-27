import { Routes, Route, Navigate } from "react-router";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
// import LoginPage from "../pages/login/loginPage";
import ProductPage from "../pages/product/productPage";
import HomePage from "../pages/home/home";
import AddProductPage from "../pages/addProduct/addProductPage";
import SalesPage from "../pages/sales/salesPage";
import {
  ADD_PRODUCTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SALE_ROUTE,
} from "./const";
import { useEffect, useState } from "react";
import ProfilePage from "@/pages/profile/profilePage";
// import { isLogin } from "../api/login.api";
// import { getFromLocalStorage } from "../utils/utils";

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
        <Route
          path={LOGIN_ROUTE}
          element={
            <ProfilePage />
            // isUserLogin ? <Navigate to={HOME_ROUTE} replace /> : <LoginPage />
          }
        />
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route
            index
            element={
              <HomePage />
              // isUserLogin ? <HomePage /> : <Navigate to={LOGIN_ROUTE} replace />
            }
          />
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path={PRODUCT_ROUTE} element={<ProductPage />} />
          <Route path={SALE_ROUTE} element={<SalesPage />} />
          <Route path={ADD_PRODUCTS_ROUTE} element={<AddProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
