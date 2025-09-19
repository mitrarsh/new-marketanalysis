import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layout/homelayout/HomeLayout";
import About from "./pages/About";
import TermsConditions from "./pages/Terms&Conditions";
import FAQ from "./pages/FAQ";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          element: <HomeLayout />,
          children: [
            { path: "/about-us", element: <About /> },
            { path: "/FAQ", element: <FAQ /> },
            { path: "/terms-and-conditions", element: <TermsConditions /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
