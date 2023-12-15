import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiBattleAxe } from "react-icons/gi";
import { motion } from "framer-motion";
import MenuRes from "./navbarResponsive";
export default function Navbar() {

    return (
        <div className="w-screen fixed top-0 left-0 z-10">
            <div className=" bg-red-900 h-14 flex justify-between">
                <div className="flex mt-5 md:mt-3">
                    <div className="md:flex">
                        <h1 className="hidden md:block ml-5">холбоо барих</h1>
                        <FaPhoneAlt className="ml-5 md: mt-1 mr-2" />
                        <a className="hidden md:block hover:underline" href="">
                            9999999
                        </a>
                    </div>
                    <div className="ml-5 flex">
                        <IoMdMail className="md: mt-1 mr-1" />
                        <a className="hidden md:block hover:underline" href="">
                            gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <button className="hidden md:mr-4 md:block text-red-900 bg-gray-200 rounded-3xl pl-4 pr-4 mt-3 hover:text-white hover:bg-red-800">
                            Элсэлт
                        </button>
                    </div>
                    <a className="md:hidden mt-4 mr-5" href="">
                        <FaUser />
                    </a>
                    <div>
                        <button className="hidden md:mr-4 md:block  text-red-900 bg-gray-200 rounded-3xl mt-3 px-2 hover:text-white hover:bg-red-800">
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full  bg-gray-200 h-14 md:h24 flex md:justify-around items-center justify-between">
                <div>
                    <GiBattleAxe className="text-red-900 text-2xl ml-5" />
                </div>
                <MenuRes/>
                <div className="hidden md:block text-red-900  justify-around">
                    <a className="mr-5 hover:text-black" href="">
                        Бүээгдэхүүн
                    </a>
                    <a className="mr-5 hover:text-black" href="">
                        мэдээ
                    </a>
                    <a className="mr-5 hover:text-black" href="">
                        Бидний тухай
                    </a>
                    <a className="mr-5 hover:text-black" href="">
                        Дэлгэрэнгүй мэдээлэл
                    </a>
                    <a className="mr-5 hover:text-black" href="">
                        тусламж
                    </a>
                </div>
            </div>
        </div>
    );
}
