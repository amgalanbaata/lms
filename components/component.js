import Navbar from "./navbar";
// import MyCarousel from "./carousel";
import Footer from "./footer";
import News from "./news";
import NewsBoard from "./newsBoard";
// import NewAccount from "./login/newAccount";
import ImageSlide from "./imageSlide";
import MyCarousel from "./carousel2";
import MySlider from "./slide";
export default function Component() {
    return (
        <div>
            <Navbar />
            {/* <MyCarousel /> */}
            <MyCarousel/>
            <ImageSlide/>
            <News/>
            <NewsBoard/>
            <MySlider/>
            <Footer/>
        </div>
    );
}
