import { FaCheckCircle } from "react-icons/fa";
import price1 from "../assets/icons/price1.png";
import price2 from "../assets/icons/price2.png";
import price3 from "../assets/icons/price3.png";
import { Form } from "react-bootstrap";

const Pricing = () => {
  return (
    <div className="mb-5 py-5">
      <div className="bg-blue pricing-section-height py-5">
        <div className="w-75 py-5 mx-auto pricing-bg">
          <h2 className="text-center text-white">
            Affordable <span className="text-green">Pricing Plans</span>
          </h2>
          <p className="text-center text-white-dim">
            Accessible Pricing for Everyone: Our affordable pricing plans ensure
            that anyone can easily purchase and benefit from our services,
            regardless of budget constraints.
          </p>
          <div className="d-flex justify-content-center align-items-baseline gap-2">
            <p className="text-white">Yearly</p>
            <Form className="ms-2">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            </Form>
            <p className="text-white">Monthly</p>
          </div>
        </div>
      </div>
      <div className="d-flex pb-5 flex-md-row container flex-column justify-content-center gap-4 pricing-minus-margin">
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="d-flex align-items-center gap-3">
            <img src={price1} alt="" />
            <div>
              <h3 className="m-0">Free</h3>
              <p className="my-1 text-black fw-semibold">4000 words/Month</p>
              <p className="text-green m-0 pricing-custom-text">No credit card required</p>
            </div>
          </div>
          <div>
            <p className="d-flex align-items-center mt-5 text-gray-dim">
              <span className="price-text text-blue fw-bold h1">$00</span><small>/Monthly</small>
            </p>
          </div>
          <p className="fw-bold">What is Included</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Conversation Starter
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Network Expression
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Unlimited Projects
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Search Assistant
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Interview Questions
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Metrics Analysis and
              recommendations
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green me-1" /> Email Support
            </li>
          </ul>
          <button className="btn-outline-tertiary w-100">Sign Up for Free</button>
        </div>

        <div className="bg-white p-4 rounded shadow-lg">
          <div className="d-flex align-items-center gap-3">
            <img src={price2} alt="" />
            <div>
              <h3 className="m-0">Free</h3>
              <p className="my-1 text-black fw-semibold">4000 words/Month</p>
              <p className="text-green m-0 pricing-custom-text">No credit card required</p>
            </div>
          </div>
          <div>
            <p className="d-flex align-items-center mt-5 text-gray-dim">
              <span className="price-text text-blue fw-bold h1">$00</span><small>/Monthly</small>
            </p>
          </div>
          <p className="fw-bold">What is Included</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Conversation Starter
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Network Expression
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Unlimited Projects
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Search Assistant
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Interview Questions
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Metrics Analysis and
              recommendations
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green me-1" /> Email Support
            </li>
          </ul>
          <button className="btn-outline-tertiary w-100">Sign Up for Free</button>
        </div>

        <div className="bg-white p-4 rounded shadow-lg">
          <div className="d-flex align-items-center gap-3">
            <img src={price3} alt="" />
            <div>
              <h3 className="m-0">Free</h3>
              <p className="my-1 text-black fw-semibold">4000 words/Month</p>
              <p className="text-green m-0 pricing-custom-text">No credit card required</p>
            </div>
          </div>
          <div>
            <p className="d-flex align-items-center mt-5 text-gray-dim">
              <span className="price-text text-blue fw-bold h1">$00</span><small>/Monthly</small>
            </p>
          </div>
          <p className="fw-bold">What is Included</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Conversation Starter
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Network Expression
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Unlimited Projects
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Search Assistant
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Interview Questions
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Metrics Analysis and
              recommendations
            </li>
            <li className="mb-3">
              <FaCheckCircle className="text-green me-1" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green me-1" /> Email Support
            </li>
          </ul>
          <button className="btn-solid-tertiary w-100">Sign up for free</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
