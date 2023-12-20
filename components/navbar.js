"use client"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiBattleAxe } from "react-icons/gi";
import { motion } from "framer-motion";
import Image from "next/image";
import MenuRes from "./navbarResponsive";
import NewAccount from "./login/newAccount";
export default function Navbar() {

    return (
        <div className="w-screen fixed z-10  justify-between items-center bg-slate-100 h-14 md:h-24 flex  shadow-md">
                <motion.div className="ml-5 flex"
                initial={{x: -250}}
                animate={{x: -10}}
                transition={{delay: 0.2}}
                >
                    <img className="md:h-16 h-18 md:w-16 h-10 md:ml-10" src="/images/LMS_logo.png"  alt="" />
                </motion.div>
                <motion.div className="md:flex flex md:h-24 mt-5 items-center mb-0"
                initial={{y: -100}}
                animate={{y: -10}}
                transition={{delay: 0.2}}
                >
                <div className="hidden md:block text-slate-900 md:mr-10 md:text-xl"
                >
                    <a className="mr-5 md:font-2xl font-bold  underline-offset-2 text-[#012A4A] hover:text-black hover:duration-100" href="">
                        Бүтээгдэхүүн
                    </a>
                    <a className="mr-5 text-[#012A4A] hover:text-black font-bold" href="">
                        Мэдээ
                    </a>
                    <a className="mr-5 font-bold text-[#012A4A] hover:text-black" href="">
                        Бидний тухай
                    </a>
                    <a className="mr-5 font-bold text-[#012A4A] hover:text-black " href="">
                        Дэлгэрэнгүй мэдээлэл
                    </a>
                    <a className="mr-5 font-bold text-[#012A4A] hover:text-black " href="">
                        Тусламж
                    </a>
                </div>
                <div className="flex md:mr-10">
                
                    <div>
                        <button className="hidden md:mr-4 md:block blue-500 text-slate-50 bg-[#3968d9] rounded-2xl px-4 py-2  hover:text-white hover:bg-[#1937e9] border-2 transition ease-out duration-500">
                            <strong>Нэвтрэх</strong>
                        </button>
                    </div>
                    <div>
                        <button className="hidden md:mr-4 md:block  text-slate-50 bg-[#3968d9] rounded-xl px-4 py-2 hover:text-white hover:bg-[#1937e9] hover:duration-200  border-2 hover:border-white focus:outline-none focus:ring transition ease-out duration-500">
                            <strong>Бүртгүүлэх</strong>
                        </button>
                    </div>
                    </div>
                    
                </motion.div>
                <div className=" inline md:hidden">
                <MenuRes/>
                </div>
        </div>
    );
}
