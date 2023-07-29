import { FaCheckCircle } from "react-icons/fa";
import price1 from "../assets/icons/price1.png";
import price2 from "../assets/icons/price2.png";
import price3 from "../assets/icons/price3.png";

const Pricing = () => {
  return (
    <div>
      <div className="bg-blue pricing-section-height">
        <div className="w-75 py-5 mx-auto">
          <h2 className="text-center text-white">
            Affordable <span className="text-green">Pricing Plans</span>
          </h2>
          <p className="text-center text-white-dim">
            Accessible Pricing for Everyone: Our affordable pricing plans ensure
            that anyone can easily purchase and benefit from our services,
            regardless of budget constraints.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <p className="text-white">Yearly</p>
            <p className="text-white">Monthly</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-md-row container flex-column justify-content-center gap-3 pricing-minus-margin">
        <div className="bg-white p-4 rounded">
          <div className="d-flex align-items-center gap-3">
            <img src={price1} alt="" />
            <div>
              <h3>Free</h3>
              <p className="fw-bold">4000 words/Month</p>
              <p className="text-green">No credit card required</p>
            </div>
          </div>
          <div>
            <p>
              <span>$00</span>/Monthly
            </p>
          </div>
          <p>What is Included</p>
          <ul className="list-unstyled">
            <li>
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Conversation Starter
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Network Expression
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Unlimited Projects
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Search Assistant
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Interview Questions
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Metrics Analysis and
              recommendations
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Email Support
            </li>
          </ul>
          <button className="btn-outline-primary">hi</button>
        </div>

        <div className="bg-white p-4 rounded">
          <div className="d-flex align-items-center gap-3">
            <img src={price1} alt="" />
            <div>
              <h3>Free</h3>
              <p className="fw-bold">4000 words/Month</p>
              <p className="text-green">No credit card required</p>
            </div>
          </div>
          <div>
            <p>
              <span>$00</span>/Monthly
            </p>
          </div>
          <p>What is Included</p>
          <ul className="list-unstyled">
            <li>
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Conversation Starter
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Network Expression
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Unlimited Projects
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Search Assistant
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Interview Questions
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Metrics Analysis and
              recommendations
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Email Support
            </li>
          </ul>
          <button className="btn-outline-primary">hi</button>
        </div>

        <div className="bg-white p-4 rounded">
          <div className="d-flex align-items-center gap-3">
            <img src={price1} alt="" />
            <div>
              <h3>Free</h3>
              <p className="fw-bold">4000 words/Month</p>
              <p className="text-green">No credit card required</p>
            </div>
          </div>
          <div>
            <p>
              <span>$00</span>/Monthly
            </p>
          </div>
          <p>What is Included</p>
          <ul className="list-unstyled">
            <li>
              <FaCheckCircle className="text-green" /> Trained AI reachouts for
              recruiters
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Cold Email
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Conversation Starter
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Network Expression
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Unlimited Projects
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Search Assistant
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Interview Questions
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Metrics Analysis and
              recommendations
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Any new features
            </li>
            <li>
              <FaCheckCircle className="text-green" /> Email Support
            </li>
          </ul>
          <button className="btn-outline-primary">hi</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
