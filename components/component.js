import Navbar from "./navbar";
import Footer from "./footer";
import News from "./news";
import NewsBoard from "./newsBoard";
import ImageSlide from "./imageSlide";
import MySlider from "./slide";
import MyCarousel from "./carousel";
export default function Component() {
    return (
        <div>
            <Navbar />
            <MyCarousel/>
            <ImageSlide/>
            <News/>
            <NewsBoard/>
            <MySlider/>
            <Navbar />
            <Footer/>
        </div>
    );
}
