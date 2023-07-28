import Footer from "./Footer";
import FreeAccount from "./FreeAccount";

const HomePage = () => {
    return (
        <div>
            <h2>Header</h2>
            <h2 className="section-mb overflow-hidden py-5">Header</h2>
            <FreeAccount/>
            <Footer/>
        </div>
    );
};

export default HomePage;