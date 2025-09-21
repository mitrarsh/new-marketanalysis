import { Link } from "react-router-dom";

type BtnProps = {
  btnClass?: string;
  children?: React.ReactNode;
  to: string;
};

const Btn = ({ to, btnClass, children }: BtnProps) => {
    typeof children === "string" ? children.toLowerCase() : "";
  return (
    <Link to={`pwa/${to}`}>
      <button className={`btn ${btnClass}`}>{children}</button>
    </Link>
  );
};

export default Btn;
