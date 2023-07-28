import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logo-small.png";

const Footer = () => {
  return (
    <div className="bg-white py-5">
      <div className="container d-flex justify-content-between">
        <div className="d-none d-md-block">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="d-flex align-items-center">
        <div>
              <img
                className="d-md-none me-2 align-items-center"
                src={logoSmall}
                alt=""
              />
            </div>
          <div className="footer-text d-flex flex-wrap">
            <Link className="text-gray-dim me-md-4 me-2 text-decoration-none">
              Product
            </Link>
            <Link className="text-gray-dim me-md-4 me-2 text-decoration-none">
              Benefit
            </Link>
            <Link className="text-gray-dim me-md-4 me-2 text-decoration-none">
              Pricing
            </Link>
            <div className="d-flex flex-wrap">
              <Link className="text-gray-dim me-md-4 me-2 text-decoration-none">
                Terms and Condition
              </Link>
            </div>
          </div>
        </div>
        <div className="text-gray-dim footer-text">
          All Copyright Reserved by{" "}
          <Link className="text-decoration-none">r3achout.ai</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
