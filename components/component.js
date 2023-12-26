import Navbar from "./navbar";
import Footer from "./footer";
import News from "./news";
import NewsBoard from "./newsBoard";
import ImageSlide from "./imageSlide";
import MySlider from "./slide";
import MyCarousel from "./carousel";
import CardSlider from "./cardSlider";
export default function Component() {
    return (
        <div>
            <Navbar />
            <MyCarousel />
            <NewsBoard />
            <CardSlider />
            {/* <News/> */}
            <ImageSlide />
            <MySlider />
            <Footer />
        </div>
    );
}
