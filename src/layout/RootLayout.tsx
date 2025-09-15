import { Outlet } from "react-router-dom";
import NavContainer from "./navbar/NavContainer";

const RootLayout = () => {
  return (
    <main>
      <NavContainer />

      <Outlet />
    </main>
  );
};

export default RootLayout;
