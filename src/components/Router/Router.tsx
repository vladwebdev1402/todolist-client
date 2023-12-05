import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Root from "../../pages/Root/Root";
import ChatPage from "../../pages/ChatPage/ChatPage";
import SignUpPage from "../../pages/SignupPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { observer } from "mobx-react-lite";
import AuthStore from "../../store/AuthStore/AuthStore";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
const routerPublick = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LoginPage />} />
      <Route path="sign" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const routerPrivate = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const Router = observer(() => {
  return (
    <>
      {AuthStore.token && localStorage.getItem("token") ? (
        <RouterProvider router={routerPrivate} />
      ) : (
        <RouterProvider router={routerPublick} />
      )}
    </>
  );
});

export default Router;
