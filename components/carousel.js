"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import Image from "./image";
import Image from "next/image";

export default function MyCarousel() {
    const [page, setPage] = useState (1);

    useEffect(() => {
        let int = setInterval(() => {
            setPage((prev) => ((prev) + 1 >= 8 ? 1 : prev + 1));
        },5000);
            return () => clearInterval(int);
    },[])
    let handlePrevPage = () => {
        setPage(prev => ((prev - 1) <= 0 ? 7 : prev -1));
    };
    let handleNextPage = () => {
        setPage(prev => (prev + 1));
    };
    console.log(page)
    return (
        <main className=" relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center"
        >
            <div className="w-full absolute h-full">
                <Image
                    className="w-full h-full object-cover object-center sizes='100vw'"
                    sizes="100vw"
                    full alt="Images"
                    // src={`/image/images${page}.jpg`}
                    src={`/images/images${page}.webp`}
                    width={1000}
                    height={1000}
                />
                <div className="justify-end absolute mb-10 bottom-8 hidden md:block right-10 py-3 px-6 bg-[#rgb0000007c] rounded-lg z-10">
                    <img className="w-10 md:w-18" src="/images/LMS_logo.white.png" width={60} alt="" />
                </div>
            </div>
            {/* left arrow */}
            <div
                onClick={handlePrevPage}
                className="z-10 absolute bottom-1/2 left-4 text-2xl font-semibold"
            >
                <span className="line-block transition-transrorm hover:-translate-x-1 hover:text-blue-300 motion-reduce:transform-none cursor-pointer hover:text-ociolet-50o0">
                    &lt;-{" "}
                </span>
            </div>
            {/* right arrow */}
            <div
                onClick={handleNextPage}
                className="z-10 absolute bottom-1/2 right-4 text-2xl font-semibold"
            >
                <span className="line-block transition-transrorm hover:-translate-x-1 hover:text-blue-300 motion-reduce:transform-none cursor-pointer ">
                    -&gt;{" "}
                </span>
            </div>
        </main>
    );
}
