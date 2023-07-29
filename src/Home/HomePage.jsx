import Footer from "./Footer";
import FreeAccount from "./FreeAccount";
import Header from "./Header";
import MainFeatures from "./MainFeatures";
import NavigationBar from "./NavigationBar";
import Pricing from "./Pricing";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <MainFeatures/>
            <Pricing/>
            <FreeAccount/>
            <Footer/>
        </div>
    );
};

export default HomePage;