import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layout/homelayout/HomeLayout";
import About from "./pages/About";
import TermsConditions from "./pages/Terms&Conditions";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/pwa/login",
      element:<Login/>,
    },
    {
      path: "/pwa/signup",
      element:<SignUp/>,
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          element: <HomeLayout />,
          children: [
            { path: "/about-us", element: <About /> },
            { path: "/FAQs", element: <FAQ /> },
            { path: "/terms-and-conditions", element: <TermsConditions /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
