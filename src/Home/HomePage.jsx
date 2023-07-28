import Footer from "./Footer";
import FreeAccount from "./FreeAccount";
import MainFeatures from "./MainFeatures";
import Pricing from "./Pricing";

const HomePage = () => {
    return (
        <div>
            <MainFeatures/>
            <Pricing/>
            <h2>Header</h2>
            <h2 className="section-mb overflow-hidden py-5">Header</h2>
            <FreeAccount/>
            <Footer/>
        </div>
    );
};

export default HomePage;