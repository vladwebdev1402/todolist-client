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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="chat" element={<ChatPage />} />
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
