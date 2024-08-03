import Footer from "./footer";
import HeroSection from "./HeroSection";
import PageFour from "./PageFour";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";

const HomePage=()=>{
    return(
        <div>
            <HeroSection/>
            <PageTwo/>
            <PageThree/>
            <PageFour/>
            <Footer/>
        </div>
    );
}

export default HomePage