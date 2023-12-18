import Navbar from "./navbar";
import MyCarousel from "./carousel";
import Footer from "./footer";
import News from "./news";
import NewsBoard from "./newsBoard";
import NewAccount from "./login/newAccount";
import ImageSlide from "./imageSlide";
export default function Component() {
    return (
        <div>
            <Navbar />
            <MyCarousel />
            <News/>
            <NewsBoard/>
            <ImageSlide/>
            <Footer/>
            <NewAccount/>
        </div>
    );
}
