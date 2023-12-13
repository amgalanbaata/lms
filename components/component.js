import Navbar from "./navbar";
import MyCarousel from "./carousel";
import Footer from "./footer";
import News from "./news";
export default function Component() {
    return (
        <div>
            <Navbar />
            <MyCarousel />
            <News/>
            <Footer/>
        </div>
    );
}
