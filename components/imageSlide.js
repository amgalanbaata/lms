"use client";
import { motion } from "framer-motion";

export default function ImageSlide() {
    return (
        <div>
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                <hr className="w-full bg-gray-100 mr-3 h-0.5 border-0" />
                <img src="/images/LMS_logo.white.png" width={60} alt="" />
                <hr className="w-full bg-gray-100 h-0.5 ml-3 border-0" />
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl">
                <div className="h-[100vh] w-full">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                        src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                        Эрхэм зорилго
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-5xl sm:w-3/4 md:leading-normal sm:py-24">
                        МЭДЛЭГЭЭРЭЭ БАЯЛАГ БҮТЭЭЖ, МАНЛАЙЛАХ ЧАДВАРТАЙ, ЁС
                        СУРТАХУУНТАЙ МЭРГЭЖИЛТЭН БЭЛТГЭНЭ
                    </p>
                    <motion.button
                        className=" sm:w-64 px-10 mx-auto text-slate-50 bg-bColor hover:bg-myColor rounded-xl py-2  hover:text-white"
                        whileHover={{
                            scale: 1,
                            // textShadow: "0px  0px 8px rgb(255, 255, 255)",
                            // boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                    >
                        <strong>
                            <i>бидэнтэй холбогдох</i>
                        </strong>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
