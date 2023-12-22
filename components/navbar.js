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
        <nav className="bg-white">
        <div className="w-screen bg-white fixed z-40  justify-between items-center h-14 md:h-24 flex shadow-xl md:flex md:justify-between px-4">
                <motion.div className="flex"
                initial={{x: -250}}
                variants={{
                    hidden: { opacity: 0, x: 75},
                    visible: { opacity: 1, x: 0},
                }}
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25}}
                >
                    <img className="md:h-16 h-18 md:w-16 h-10" src="/images/LMS_logo.png"  alt="" />
                </motion.div>
                <motion.div className="md:flex flex md:h-24 items-center"
                variants={{
                    hidden: { opacity: 0, x: 75},
                    visible: { opacity: 1, x: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25}}
                >
                <div className="hidden md:block text-slate-900 md:mr-5 md:text-xl">
                        <div class="hidden w-full md:block md:w-auto">
      <ul class="font-medium flex flex-col p-4 md:p-0  border border-slate-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-bColor rounded md:bg-transparent md:text-bColor md:p-0 hover:underline md:dark:text-bColor" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
                </div>
                <div className="flex">
                
                    <div>
                        <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-md px-4 py-1  hover:text-white"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            <strong>Нэвтрэх</strong>
                        </motion.button>
                    </div>
                    <div>
                        <motion.button className="hidden md:mr-4 md:block  text-slate-50 bg-bColor hover:bg-myColor rounded-md px-4 py-1  hover:border-white"
                        whileHover={{scale: 1,
                        textShadow: "0px  0px 2px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 2px rgb(255,255,255)",
                    }}>
                            <strong>Бүртгүүлэх</strong>
                        </motion.button>
                    </div>
                    </div>
                    
                </motion.div>
                <motion.div className="md:hidden"
               variants={{
                hidden: { opacity: 0, x: 75},
                visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25}}
                >
                <MenuRes/>
                </motion.div>
        </div>
        </nav>
    );
}
