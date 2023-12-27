"use client";
import { GiBattleAxe } from "react-icons/gi";
import { backGround } from "../public/images/backGround.jpeg";
import Image from "next/image";
import ImageSlide from "./imageSlide";
import { motion } from "framer-motion";
export default function NewsBoard() {
    return (
        <div className="w-full h-full bg-myColor">
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                <hr className="w-full bg-white mr-3 h-0.5 border-0" />
                <img src="/images/LMS_logo.white.png" width={60} alt="" />
                <hr className="w-full bg-white h-0.5 ml-3 border-0" />
            </div>

            <div className="bg-myColor inline xl:flex items-center h-[100vh">
                <div className="text-3xl sm:w-2/4 sm:leading-loose justify-center items-center inline md:p-24 p-3 ">
                    <h1 className="sm:text-4xl text-slate-50 text-2xl md:py-10 text-center font-sans">
                        <strong>
                            <i>LMS</i>
                        </strong>
                        -д тавтай морил
                    </h1>
                    <div className="mx-auto md:inline max-w-8xl w-full bg-myColor py-10 md:w-2/4">
                        <div className=" flex [&:hover>div]:w-16 [&>div:hover]:w-[35rem]">
                            <div className="group relative h-96 md:h-[70vh] w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500">
                                <img
                                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                                    src="https://img.freepik.com/free-photo/researcher-spinning-globe-round-screen_53876-95815.jpg?w=1380&t=st=1703579913~exp=1703580513~hmac=6627781e1ce6f2bdf03e0532041e11df37b0a7906665bc3af1cf0a226f06ceb7"
                                    alt=""
                                />
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">
                                        <div className="flex gap-3 text-white">
                                            <div>
                                                <p className="text-2xl">
                                                    Өндөр чанартай аудио
                                                </p>
                                                <img
                                                    src="/images/LMS_logo.white.png"
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500">
                                <img
                                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                                    src="https://img.freepik.com/free-vector/technology-big-data-gradient-background_197582-250.jpg?w=740&t=st=1703577368~exp=1703577968~hmac=0b7346ad8c56172e0bdb36b2d1511427cb4092c924e9e6e3412f6f5553724564"
                                    alt=""
                                />
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">
                                        <div className="flex gap-3 text-white">
                                            <div>
                                                <p className="text-2xl">
                                                    Вебинарын онцлогууд
                                                </p>
                                                <img
                                                    src="/images/LMS_logo.white.png"
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500">
                                <img
                                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                                    src="https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-131.jpg?w=1380&t=st=1703576928~exp=1703577528~hmac=d353c0571e6ff6ea795c3742432107ef71ac4eba1d67e2fed6934b8e7b0d04d0"
                                    alt=""
                                />
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">
                                        <div className="flex gap-3 text-white">
                                            <div>
                                                <p className="text-2xl">
                                                    Чатлах
                                                </p>
                                                <img
                                                    src="/images/LMS_logo.white.png"
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative h- w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500">
                                <img
                                    className="rounded-r-lg h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                                    src="https://img.freepik.com/free-vector/mobile-phone-with-world-map-infographic_23-2147514327.jpg?w=740&t=st=1703580232~exp=1703580832~hmac=aadbe27ebf5555f96116ccd1608ba8ac2c93b0711cfec9fdf130df9a76131456"
                                    alt=""
                                />
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">
                                        <div className="flex gap-3 text-white">
                                            <div>
                                                <p className="text-2xl">
                                                    Хэрэглэгчийн дэмжлэг
                                                </p>
                                                <img
                                                    src="/images/LMS_logo.white.png"
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="sm:w-3/6"
                    src="/image/screenShot2.png"
                    width={500}
                    height={500}
                    alt=""
                />
            </div>
        </div>
    );
}
