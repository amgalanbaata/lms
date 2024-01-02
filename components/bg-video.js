"use client";
import { Roboto_Slab } from "next/dist/compiled/@next/font/dist/google";

export default function BgVideo(roboto) {
    return (
        <div className=" h-[calc(50vh-70px)] sm:h-[calc(70vh-90px)] w-full md:h-screen  overflow-hidden bg-black">
            <video
                className="h-full w-screen"
                src={require("../public/image/bg-video12.mp4")}
                loop
                autoPlay
                muted
                width={1000}
                height={1000}
            />
            <div className="text-white absolute mx-auto my-auto inset-0 z-10 mt-36 ml-16 justify-center items-center md:mt-96 md:ml-80 inline leading-loose">
                <h1 className="md:text-6xl text-2xl">
                    Premium video meetings.
                </h1>
                <br />
                <span className="md:text-3xl font-serif text-[#D4A373]">
                    Now free for everyone.
                </span>
            </div>
        </div>
    );
}
