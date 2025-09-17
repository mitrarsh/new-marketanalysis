import FooterAbout from "../../components/footer/FooterAbout";
import FooterContact from "../../components/footer/FooterContact";
import FooterPages from "../../components/footer/FooterPages";

const Footer = () => {
  return (
    <footer className="layout-section ">
      <div className="footer">
        <FooterAbout />
        <FooterPages />
        <FooterContact />
      </div>
      <div className="rights">All Rights Reserve</div>
    </footer>
  );
};

export default Footer;
