import Navbar from "./navbar";
import MyCarousel from "./carousel";
import Footer from "./footer";
import News from "./news";
import NewsBoard from "./newsBoard";
export default function Component() {
    return (
        <div>
            <Navbar />
            <MyCarousel />
            <News/>
            <NewsBoard/>
            <Footer/>
        </div>
    );
}
