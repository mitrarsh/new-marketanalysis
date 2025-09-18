import FallingText from "../UI/FallingText";

const Header = () => {
  return (
    <div className="header ">
      <div className="mobile-img">
        <img src="/assets/icons/trade2.png" alt="" />
      </div>
      <div className="gap">
        <img src="/assets/icons/trade2.png" alt="" />
      </div>
      <div className="header-content-container">
        <div className="header-content">
          <div className="header-title">
            <h1>
              THE <b>FUTURE</b> OF <b>MINERAL MARKET</b> IS HERE WITH
            </h1>
            <FallingText/>
          </div>
          <p>
            NEW, an innovative and user-friendly AI model that uses cutting-edge
            machine learning techniques to predict Iron ore prices and analyze
            the market. NEW is revolutionizing AI technology in business at all
            levels. Your AI partner!
          </p>
          <div className="header-title">
            <p>Try it now!</p>
          </div>
        </div>
      </div>
      <div className="header-bg"></div>
    </div>
  );
};

export default Header;
