import { Link } from "react-router-dom";
import Btn from "../components/navbar/Btn";
import PWASection from "../components/pwa/PWASection";

const SignUp = () => {
  return (
    <PWASection path="Sign Up">
      <div className="signup-btn-container">
        <Btn to="" btnClass="pwa-btn sign-up-btn">
          Send verification code
        </Btn>
      </div>
      <div className="navigate-link flex">
        <span>
          <h4>Already have an account?</h4>
        </span>
        <Link to="/pwa/login">
          <span>Sign in</span>
        </Link>
      </div>
    </PWASection>
  );
};

export default SignUp;
