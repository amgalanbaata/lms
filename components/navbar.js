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
        <div className="w-screen fixed top-0 left-0 z-10">
            <div className="bg-blue-500 h-14 flex justify-between">
                <div className="flex mt-5 md:mt-3">
                    <div className="md:flex text-white">
                        <h1 className="hidden md:block ml-5">холбоо барих</h1>
                        <FaPhoneAlt className="ml-5 md: mt-1 mr-2" />
                        <p className="hidden md:block" href="">
                            9999999
                        </p>    
                    </div>
                    <div className="ml-5 flex text-white">
                        <IoMdMail className="md: mt-1 mr-1" />
                        <a className="hidden md:block hover:underline" href="">
                            gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex md:mr-10">
                    <div>
                        <button className="hidden md:mr-4 md:block blue-500 text-blue-500 bg-gray-50 rounded-3xl pl-4 pr-4 mt-3 hover:text-white hover:bg-blue-500 border-2 transition ease-out duration-500">
                            Нэвтрэх
                        </button>
                    </div>
                    <a className="md:hidden mt-4 mr-5" href="">
                        <FaUser />
                    </a>
                    <div>
                        <button className="hidden md:mr-4 md:block  text-blue-500 bg-gray-50 rounded-3xl mt-3 px-2 hover:text-white hover:bg-blue-500 hover:duration-200  border-2 hover:border-white focus:outline-none focus:ring transition ease-out duration-500">
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full  bg-gray-200 h-14 md:h24 flex md:justify-between items-center justify-between">
                <div>
                    {/* <img src="/images/LMS_logo.png" width={30} /> */}
                    <Image
                    src="/images/LMS_logo.png"
                    width={40}
                    height={30}           
                                alt="logo"
                    className="focus:border-none active:border-none text-myColor text-2xl ml-5 md:ml-10"
                    />
                </div>
                <MenuRes/>
                <div className="hidden md:block text-gray-800 justify-around md:mr-10">
                    <a className="mr-5 hover:underline font-bold font-momo" href="">
                        Бүтээгдэхүүн
                    </a>
                    <a className="mr-5 hover:underline font-bold" href="">
                        мэдээ
                    </a>
                    <a className="mr-5 hover:underline font-bold" href="">
                        Бидний тухай
                    </a>
                    <a className="mr-5 hover:underline font-bold" href="">
                        Дэлгэрэнгүй мэдээлэл
                    </a>
                    <a className="mr-5 hover:underline font-bold" href="">
                        тусламж
                    </a>
                </div>
            </div>
        </div>
    );
}
