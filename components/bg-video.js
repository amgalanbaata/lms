"use client";

export default function BgVideo() {
    return (
        <div className=" h-[calc(50vh-70px)] sm:h-[calc(70vh-90px)] w-full md:h-screen  overflow-hidden bg-black">
            <video
                className="h-full w-screen"
                src={require("../public/image/bg-video8.mp4")}
                loop
                autoPlay
                muted
                width={1000}
                height={1000}
            />
        </div>
    );
}
