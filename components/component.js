import NewsBoard from "./newsBoard";
import ImageSlide from "./imageSlide";
import MySlider from "./slide";
// import MyCarousel from "./carousel";
import CardSlider from "./cardSlider";
import BgVideo from "./bg-video";
export default function Component() {
    return (
        <div>
            {/* <MyCarousel /> */}
            <BgVideo />
            <NewsBoard />
            <CardSlider />
            <ImageSlide />
            <MySlider />
        </div>
    );
}
