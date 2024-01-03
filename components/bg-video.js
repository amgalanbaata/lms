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
            <div className="text-white absolute mx-auto my-auto inset-0 z-50 mt-36 ml-16 justify-center items-center md:mt-24 md:ml-80 sm:grid grid-cols-1">
                <div>
                    <h1 className="md:text-6xl text-2xl grid gap-5 mb-5 text-white">
                        Premium video meetings.
                    </h1>
                    <span className="md:text-4xl font-serif  text-[#D4A373]">
                        Now free for everyone.
                    </span>
                </div>

                <span className="md:text-lg hidden md:block text-gray-200 w-2/6">
                    LMS is a unified communications platform primarily known for
                    its use as a web conferencing tool. It features HD video and
                    audio, collaboration tools, chat functionality
                </span>
            </div>
        </div>
    );
}
