"use client";
import { GiBattleAxe } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function News() {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    return (
        <center className="bg-slate-50 h-screen items-center justify-center my-auto">
            <center className="lg:flex lg:px-10 sm:grid sm:grid-cols-2 gap-4 inline my-auto justify-center items-center">
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl sm:rounded-md">
                    <div className="h-[600px]">
                        <img
                            class=" h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                            src="/image/card1.jpg"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </div>
                    <div class="absolute inset-0  to-slate-50 group-hover:visible">
                        <div class=" sm:top-10">
                            <div class="flex gap-3 text-white justify-center">
                                <div>
                                    <h1 className="text-xl md:text-2xl text-myColor font-sans mb-3 ">
                                        <strong>
                                            <i>Онлайн видео уулзалтууд</i>
                                        </strong>
                                    </h1>
                                    <motion.button
                                        onClick={() => setShow(!show)}
                                        className="text-myColor mx-auto"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <strong>
                                            <i className="flex items-center">
                                                learn more
                                                {show ? (
                                                    <FaLongArrowAltUp />
                                                ) : (
                                                    <FaLongArrowAltDown />
                                                )}
                                            </i>
                                        </strong>
                                    </motion.button>
                                    <p
                                        className={`text-black text-justify sm:w-full p-5 sm:leading-loose sm:text-xl ${
                                            show ? "hidden" : "block"
                                        }`}
                                    >
                                        Онлайн видео хурлаар дамжуулан илүү сайн
                                        харилцах, хамтран ажиллах, санаа бодлоо
                                        илэрхийлэх. нүүр тулсан хамтын
                                        ажиллагаагаар зөвшилцөлд хүрээрэй.
                                    </p>
                                    <center className="bg-blue-800 text-2xl grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() =>
                                                setCount(
                                                    !count
                                                        ? count + 1
                                                        : count - 1
                                                )
                                            }
                                        >
                                            <FaHeart
                                                className={`${
                                                    count ? "text-red-700" : ""
                                                }`}
                                            />
                                        </button>
                                        <p>{count}</p>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </center>
    );
}
