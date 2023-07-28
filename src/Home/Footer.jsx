import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <h1 className="display-3 mb-5">Dummy header</h1>
      <div className="container d-flex justify-content-between">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <Link className="text-gray-dim me-4 text-decoration-none">Product</Link>
          <Link className="text-gray-dim me-4 text-decoration-none">Benefit</Link>
          <Link className="text-gray-dim me-4 text-decoration-none">Pricing</Link>
          <Link className="text-gray-dim me-4 text-decoration-none">Terms and Condition</Link>
        </div>
        <div className="text-gray-dim">
            All Copyright Reserved by <Link className="text-decoration-none">r3achout.ai</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
