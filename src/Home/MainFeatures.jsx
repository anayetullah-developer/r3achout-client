import { FaBeer } from "react-icons/fa";
import styleImg from "../assets/section-style.png";
import styleImg2 from "../assets/section-style2.png";
import barChart from "../assets/icons/bar-chart.png";
import handShake from "../assets/icons/hand-shake.png";
import search from "../assets/icons/search.png";
import tailored from "../assets/icons/tailored.png";
import userBlue from "../assets/icons/user-blue.png";
import userGreen from "../assets/icons/user-green.png";

const MainFeatures = () => {
  return (
    <div className="main-feature-section container">
      <div className="w-50 py-5 mx-auto">
        <h2 className="text-center text-gray">
          Our Main <span className="text-green">Features</span>
        </h2>
        <p className="text-center text-gray-dim">
          <FaBeer />
          With r3achout.ai's core features, recruiters can revolutionize their
          email outreach, streamline their processes, and achieve unparalleled
          success in attracting and engaging with the best-fit candidates
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <img src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={userBlue} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row-reverse justify-content-between">
          <div>
            <img src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={handShake} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <img src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={tailored} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row-reverse justify-content-between">
          <div>
            <img src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={barChart} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <img src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={search} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row-reverse justify-content-between">
          <div>
            <img src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={userGreen} alt="" />
            </div>
            <div>
              <h3>Engage In More Conversation</h3>
              <p>
                Effective communication is key in recruitment. Our web app helps
                you engage in more conversations with potential candidates by
                ensuring your reachouts are compelling and impactful. Stand out
                from the crowd with personalized messages that offer clear
                benefits to candidates, increasing their interest and
                willingness to engage
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainFeatures;
