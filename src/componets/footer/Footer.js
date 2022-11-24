import Digiapp from "./Digiapp";
import Digikala from "./Digikala";
import Doc from "./Doc";
import Features from "./Features";
import Mark from "./Mark";
import Topfooter from "./Topfooter";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <br />
      <Topfooter />
      <Features />
      <Digikala />
      <Digiapp />
      <Doc />
      <Mark />
    </div>
  );
};

export default Footer;
