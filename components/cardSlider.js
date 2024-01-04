"use client";
import { motion } from "framer-motion";
import "../public/images/bg-image.webp";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Rating } from "./rating";
export default function CardSlider() {
    const [count, setCount] = useState(0);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    console.log(count);

    return (
        <div className="h-full w-full bg-myColor">
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                <hr className="w-full bg-white mr-3 h-0.5 border-0" />
                <img src="/images/LMS_logo.white.png" width={60} alt="" />
                <hr className="w-full bg-white h-0.5 ml-3 border-0" />
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 sm:p-10 lg:px-24">
                <h1 className=" text-slate-50 grid sm:col-span-2 lg:col-span-3 text-4xl ml-2 font-sans">
                    Мэдээ мэдээлэл
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
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 leading-loose">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Онлайн видео уулзалтууд
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Онлайн видео хурлаар дамжуулан илүү сайн харилцаж,
                            нүүр тулсан ярилцлагаар зөвшилцөлд хүрээрэй.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        {/* <div className="grid grid-cols-2 gap-2 mx-7 justify-between mt-2">
                            <button
                                className="text-2xl flex justify-center mt-1 text-center items-center"
                                onClick={() =>
                                    setCount(!count ? count + 1 : count - 1)
                                }
                            >
                                <AiFillLike
                                    className={`${
                                        count ? "text-blue-700" : ""
                                    }`}
                                />
                            </button>
                            <p className="text-xl mt-1">{count}</p>
                        </div> */}
                        <Rating />
                    </div>
                </div>
                <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 sm:rounded-md">
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
                            таны сонгосон ямар ч сонголт таны өгөгдлийн аюулгүй
                            байдлыг нэн тэргүүнд тавьж байгаа эсэхийг шалгаарай.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        <Rating />
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
                            Үнэгүй, төлбөртэй гэх мэт ихэнх видео хурлын
                            програмуудын хувьд та хурал хийхдээ ихэвчлэн
                            төхөөрөмждөө программ хангамж суулгах шаардлагатай
                            байдаг.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        <Rating />
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
                            Дэлгэц хуваалцах
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Дэлгэц хуваалцах нь аливаа харилцан ярианд контекст
                            оруулах хүчирхэг хэрэгслийг санал болгодог.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        <Rating />
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-96">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://img.freepik.com/free-photo/copy-space-pushpin-map-with-thread_23-2148510470.jpg?w=740&t=st=1703583520~exp=1703584120~hmac=f94d4104521de1ad5bfa934e5cc0741938abfd32b3d8bc307e90d6daff5d076c.webp"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Уулзалтын бичлэг хийх чадвар
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolore adipisci placeat.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        <Rating />
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-96 ">
                        <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?w=1380&t=st=1703586584~exp=1703587184~hmac=26439be3442709bc25a30d1590591d547d2328e5e863f1cc4945cf33f9b925ff"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">
                            Зохицуулагчийн хяналт
                        </h1>
                        <p className="mb-3 text-lg md:text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            та хэрэглэгчдийн дууг хаах, хяналтыг бусдад
                            дамжуулах эсвэл хэн нэгний видеог унтраах
                            шаардлагатай байж болно.
                        </p>
                        <button className="text-blue-500  hover:text-white text-base flex items-center justify-center hover:underline">
                            <strong>See more</strong>
                        </button>
                        <Rating />
                    </div>
                </div>
            </div>
        </div>
    );
}
