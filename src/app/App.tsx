import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "../pages";
import {ErrorPage} from "../pages/error-page";

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
      <h1>any content</h1>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
