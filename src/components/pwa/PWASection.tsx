import { Link } from "react-router-dom";

type PWASectionProps = {
  children: React.ReactNode;
  path:string
};

const PWASection = ({ children, path }: PWASectionProps) => {
  return (
    <div className="pwa-section">
      <nav>
        <div className="pwa-logo-container flex">
          <img  src="/assets/icons/logo.svg" alt="" />
        </div>
      </nav>
      <div className="form-container flex flex-col">
        <div className="returnBtn flex flex-row">
            <Link to='/'><img src="/assets/icons/arrow-left-white.svg" alt="" /></Link>
            <h3>{path}</h3>
        </div>
        <div className="number-input-container">
            <div></div>
            <p>Code</p>
            <p>Phone Number</p>
            <div><h4>+</h4></div>
            <input className='input' type="text" />
            <input className='input' type="text" placeholder="example xxxxxxxxx"/>
            
        </div>
        {children}
      </div>
    </div>
  );
};

export default PWASection;
