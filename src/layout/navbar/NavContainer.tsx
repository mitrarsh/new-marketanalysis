import Btn from "../../components/btn";

const NavContainer = () => {
  return (
    <nav className="nav-container flex justify-center align-center ">
      <div className="logo-container">
        <img src="/assets/icons/logo.svg" alt="" />
      </div>
      <div>
        <Btn btnClass="btn-secondary">Login</Btn>
        <Btn btnClass="btn-primary">Sign Up</Btn>
      </div>
    </nav>
  );
};

export default NavContainer;
