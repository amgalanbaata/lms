// import Image from "next/image";
import Component from "@/components/component";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
export default function Home() {
    return (
        <main className="">
            <Navigation />
            <Component />
            <Footer />
        </main>
    );
}
