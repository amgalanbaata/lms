"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavbarRes from "./navbarResponsive";
export default function Navbar() {
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 1000;

        if (backgroundTransparacyVar < 1) {
            setBackgroundTransparacy(backgroundTransparacyVar);
        }
    }, [clientWindowHeight]);

    console.log("color" + " " + backgroundTransparacy);
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top"
            style={{
                background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            }}
        >
            <div
                style={{
                    background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
                    color: `rgba(255,255,255,${backgroundTransparacy})`,
                }}
                className={` lg:px-24 w-full fixed z-40  justify-between items-center h-14 sm:h-20 md:h-20 flex shadow-xl md:flex md:justify-between px-4`}
            >
                <motion.div
                    className="flex"
                    initial={{ x: -250 }}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <img
                        className="md:h-16 h-18 md:w-16 h-10"
                        src="/images/LMS_logo.png"
                        alt=""
                    />
                </motion.div>
                <motion.div
                    className="md:flex flex md:h-24 items-center"
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="hidden md:block text-slate-900 md:mr-5 md:text-xl">
                        <div className="hidden w-full md:block md:w-auto">
                            <ul
                                className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:dark:bg-gray-900 "
                                style={{
                                    color: `rgba(0,0,0,${backgroundTransparacy})`,
                                }}
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 bg-bColor rounded md:bg-transparent  md:p-0 hover:underline md:dark:text-bColor"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <button
                                style={{
                                    border: `rgba(0,00,0, ${backgroundTransparacy})`,
                                }}
                                className="hidden md:mr-4 md:block text-bColor rounded-md px-4 py-1 hover:text-myColor font-medium"
                                whileHover={{
                                    scale: 1,
                                    textShadow:
                                        "0px  0px 2px rgb(255, 255, 255)",
                                    boxShadow: "0px 0px 2px rgb(255,255,255)",
                                }}
                            >
                                <strong>Нэвтрэх</strong>
                            </button>
                        </div>
                        <div>
                            <motion.button
                                className="hidden md:block  text-slate-50 bg-bColor hover:bg-myColor rounded-md px-4 py-1  hover:border-white"
                                whileHover={{
                                    scale: 1,
                                    textShadow:
                                        "0px  0px 2px rgb(255, 255, 255)",
                                    boxShadow: "0px 0px 2px rgb(255,255,255)",
                                }}
                            >
                                Бүртгүүлэх
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:hidden"
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <NavbarRes />
                </motion.div>
            </div>
        </nav>
    );
}
