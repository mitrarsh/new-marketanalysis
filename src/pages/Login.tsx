import { Link } from "react-router-dom";
import Btn from "../components/navbar/Btn";
import PWASection from "../components/pwa/PWASection";

const Login = () => {
  return (
    <PWASection path="Log in">
      <div>
        <div className="password-container flex flex-col">
          <p>Password</p>
          <input className="input" type="text" />
          <p className="forgot">Forgot password?</p>
          <Btn to="" btnClass="sign-in-btn pwa-btn">
            Sign in
          </Btn>
          <div className="navigate-link flex">
            <span>
              <h4>Haven't registered yet?</h4>
            </span>
            <Link to="/pwa/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </PWASection>
  );
};

export default Login;
