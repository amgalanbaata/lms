"use client";
import { motion } from "framer-motion";
// import Image from "next/image"
import "../public/images/bg-image.webp";
export default function CardSlider() {
    return (
        <div className="h-full w-full bg-myColor">
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                <hr className="w-full bg-white mr-3 h-0.5 border-0" />
                <img src="/images/LMS_logo.white.png" width={60} alt="" />
                <hr className="w-full bg-white h-0.5 ml-3 border-0" />
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 sm:p-10 lg:px-56">
                <h1 className="text-3xl text-slate-50 grid sm:col-span-2 lg:col-span-3">
                    <strong>Мэдээ мэдээлэл</strong>
                </h1>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-96">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/image/cardSlider1.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Онлайн видео уулзалтууд
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="md:mr-4 text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 sm:rounded-md">
                    <div className="h-96">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/image/cardSlider2.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Аюулгүй байдал
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 sm:rounded-md">
                    <div className="h-96">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/image/cardSlider3.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Хандахад хялбар
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 sm:rounded-md">
                    <div className="h-96 ">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-901.jpg?w=1380&t=st=1703583481~exp=1703584081~hmac=ae3d0472b04f7c5844a7e3a002db18f2b9c9e41d2833b4e16eaf1e9d57f2f553"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Онлайн видео уулзалтууд
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-96">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/image/cardSlider1.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Онлайн видео уулзалтууд
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-96 ">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="/image/cardSlider1.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Онлайн видео уулзалтууд
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <motion.button
                            className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                            whileHover={{
                                scale: 1,
                                textShadow: "0px  0px 2px rgb(255, 255, 255)",
                                boxShadow: "0px 0px 2px rgb(255,255,255)",
                            }}
                        >
                            See More
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
