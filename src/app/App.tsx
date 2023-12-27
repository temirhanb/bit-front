import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "../pages";
import {ErrorPage} from "../pages/error-page";
import {Header} from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
]);

export const App: React.FC = () => {

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
