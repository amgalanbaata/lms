// import Image from "next/image";
import Component from "@/components/component";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Component />
            <Footer />
        </main>
    );
}
