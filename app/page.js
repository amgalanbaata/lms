// import Image from "next/image";
import Component from "@/components/component";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import News from "@/components/news";
export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Component />
            <Footer />
            <News />
        </main>
    );
}
