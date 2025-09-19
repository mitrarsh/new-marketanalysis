
import { Outlet } from "react-router-dom";
import Breadcrumb from "../../components/footer/breadcrumb";
const HomeLayout = () => {


  return (
    <div>
      <Breadcrumb/>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
