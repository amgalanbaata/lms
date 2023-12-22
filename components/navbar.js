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
    const bStyle ={
        whileHover: {scale: 1.1,
            textShadow: "0px  0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",}
    }

    return (
        <div className="w-screen fixed z-40 bg-white  justify-between items-center h-14 md:h-24 flex shadow-xl">
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
                <div className="hidden md:block text-slate-900 md:mr-10 md:text-xl">
                    {/* <div className="flex">
                    <div >
                    <a className="mr-5 md:font-2xl font-bold  underline-offset-2 text-[#012A4A] hover:duration-100" href="">
                        Бүтээгдэхүүн
                    </a>
                    </div>
                    <div >
                        <a className="mr-5 text-[#012A4A] font-bold" href="">
                        Мэдээ
                    </a></div>
                    <div
                    ><a className="mr-5 font-bold text-[#012A4A] " href="">
                        Бидний тухай
                    </a></div>
                    <div
                    ><a className="mr-5 font-bold text-[#012A4A]  " href="">
                        Тусламж
                    </a></div>
                    </div> */}
                        <div class="hidden w-full md:block md:w-auto">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
                </div>
                <div className="flex md:mr-10">
                
                    <div>
                        <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-[#3968d9] rounded-xl px-4 py-2  hover:text-white"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            <strong>Нэвтрэх</strong>
                        </motion.button>
                    </div>
                    <div>
                        <motion.button className="hidden md:mr-4 md:block  text-slate-50 bg-[#3968d9] rounded-xl px-4 py-2  hover:border-white"
                        whileHover={{scale: 1,
                        textShadow: "0px  0px 2px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 2px rgb(255,255,255)",
                    }}>
                            <strong>Бүртгүүлэх</strong>
                        </motion.button>
                    </div>
                    </div>
                    
                </motion.div>
                <motion.div className=" inline mt-2 md:hidden"
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ delay: 0.2}}
                >
                <MenuRes/>
                </motion.div>
        </div>
    );
}
