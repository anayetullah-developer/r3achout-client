import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <div className="header-bg header-height py-4">
      <NavigationBar />
      <header>
        <div className="py-5 mx-auto container">
          <h1 className="text-center text-white">
            Introducing <span className="text-green">r3achout.ai</span> <br/> The Ultimate Recruiter's Assistant
          </h1>
          <p className="text-center text-white-dim w-50 w-sm-full mx-auto my-4">
            Accessible Pricing for Everyone: Our affordable pricing plans ensure
            that anyone can easily purchase and benefit from our services,
            regardless of budget constraints.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn-gradient-primary btn-sm">Get Started</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
