import { Outlet } from "react-router-dom";
import NavContainer from "./navbar/NavContainer";
import Footer from "./footer/Footer";

const RootLayout = () => {
  return (
    <main>
      <NavContainer />
      <Outlet />
      <Footer/>
    </main>
  );
};

export default RootLayout;
