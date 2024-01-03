"use client";
import { motion } from "framer-motion";
import background from "../public/images/bg-image.webp";
import Image from "next/image";

export default function MySlider() {
    return (
        <div className="">
            {/* <Image
                src={background}
                alt="background image"
                className="w-full bg-slate-50"
                width={1000}
                height={1000}
            /> */}
            <div className="w-full h-24 flex items-center justify-center bg-slate-50 ">
                <hr className="w-full bg-black mr-3 h-0.5 border-0" />
                <img
                    src="/images/LMS_logo.png"
                    width={60}
                    alt=""
                    className="text-myColor"
                />
                <hr className="w-full bg-black h-0.5 ml-3 border-0" />
            </div>
            <div className="bg-slate-50 sm:px-56 py-24">
                <div className="w-full h-[calc(80vh-50px)] text-center justify-center grid grid-cols-1 gap-1 md:gap-16 items-center ">
                    <h1 className="sm:text-4xl text-slate-700 text-2xl">
                        <strong>LMS вэб</strong>
                    </h1>
                    <p className="sm:text-3xl text-xl text-slate-500 text-justify md:text-center mx-2">
                        <strong className="text-blue-700">LMS Web</strong> нь
                        татаж авахгүйгээр програмын онлайн хувилбар юм. Та
                        өөрийн компьютер эсвэл ухаалаг гар утсан дээрх дурын
                        хөтчөөр дамжуулан үйлчилгээнд нэвтэрч болно. Та линкээр
                        орж хэрэглэгчийн нэр, нууц үгээ оруулахад л хангалттай.
                    </p>
                    <motion.button
                        className=" sm:w-64 px-10 mx-auto text-slate-50 bg-bColor hover:bg-myColor rounded-xl py-2  hover:text-white"
                        whileHover={{
                            scale: 1,
                            // textShadow: "0px  0px 8px rgb(255, 255, 255)",
                            // boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                    >
                        <strong>дэлгэрэнгүй</strong>
                    </motion.button>
                    <p className="sm:text-2xl text-slate-500">
                        <strong className="text-blue-700 font-mono mr-2">
                            <i>LMS</i>
                        </strong>
                        вэбийг хөтөч дээрээ шууд нээнэ үү:
                    </p>
                    <hr className="w-full" />
                </div>
            </div>
        </div>
    );
}
