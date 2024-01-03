"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
export default function MenuRes() {
    const [myButton, setMyButton] = useState(true);

    console.log(myButton);
    return (
        <div className="">
            <button
                onClick={() => setMyButton(!myButton)}
                className="
                text-2xl text-black"
            >
                {myButton ? <GiHamburgerMenu /> : <BiMenuAltLeft />}
            </button>
            <motion.div
                className={`w-screen items-center text-start grid grid-cols-1 text-gray-50 top-13 shadow-xl absolute right-0 h-60 ${
                    myButton ? "hidden" : "block"
                }`}
            >
                <ul className="font-medium flex flex-col p-4 md:p-0  border border-slate-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white bg-bColor rounded md:bg-transparent md:text-bColor md:p-0 hover:underline md:dark:text-bColor"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bColor md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}
