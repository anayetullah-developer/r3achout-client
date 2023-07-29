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
    <div className="bg-gray-2 py-5">
      <div className="main-feature-section container">
        <div className="w-50 py-5 mx-auto w-sm-full">
          <h2 className="text-center text-gray">
            Our Main <span className="text-green">Features</span>
          </h2>
          <p className="text-center text-gray-dim">
            With r3achout.ai's core features, recruiters can revolutionize their
            email outreach, streamline their processes, and achieve unparalleled
            success in attracting and engaging with the best-fit candidates
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-column flex-column-reverse flex-md-row justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5 pe-md-4 mb-md-0 mx-auto" src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={userBlue} alt="" />
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

        <div className="d-flex flex-column-reverse flex-md-row-reverse justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5  ps-md-4 mb-md-0" src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={handShake} alt="" />
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

        <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5  pe-md-4 mb-md-0" src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={tailored} alt="" />
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

        <div className="d-flex flex-column-reverse flex-md-row-reverse justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5  ps-md-4 mb-md-0" src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={barChart} alt="" />
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

        <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5  pe-md-4 mb-md-0" src={styleImg} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={search} alt="" />
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

        <div className="d-flex flex-column-reverse flex-md-row-reverse justify-content-between align-items-sm-center gap-md-5 gap-3 mt-md-5">
          <div>
            <img className="w-sm-full mb-5 ps-md-4 mb-md-0" src={styleImg2} alt="" />
          </div>
          <div className="d-flex gap-3">
            <div>
              <img className="feature-icon"src={userGreen} alt="" />
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
