"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
export default function MenuRes(){
    const [myButton, setMyButton]=useState(true);
    console.log(myButton)
    return(
        <div className="inline md:hidden">
            <button onClick={()=> setMyButton(!myButton)} className="text-black
                mr-4 text-2xl">{myButton ? (<GiHamburgerMenu />):(<BiMenuAltLeft/>)}</button>
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
            <div className={`w-60 items-center text-start grid grid-cols-1 bg-myColor text-gray-50 top-24 rounded-l-2xl absolute right-0 h-60 ${myButton ? 'hidden' : 'block'}`}>
        <a className="ml-3 hover:underline font-bold" href="">Бүээгдэхүүн</a>
        <a className="ml-3 hover:underline font-bold"  href="">мэдээ</a>
        <a className="ml-3 hover:underline font-bold"  href="">Бидний тухай</a>
        <a className="ml-3 hover:underline font-bold"  href="">Дэлгэрэнгүй мэдээлэл</a>
        <a className="ml-3 hover:underline font-bold"  href="">тусламж</a>
        </div>
                </motion.div>
        
        </div>
    )
}
// className="w-60 items-center text-start grid grid-cols-1 bg-red-900 text-white top-24 rounded-l-2xl absolute right-0 h-60"
// <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
//     {navbar ? (<Image src="/close.svg" width={30} height={30} alt="logo" />) : ( <Image src="/hamburger-menu.svg" width={30} height={30} alt="logo" className="focus:border-none active:border-none"/>)}
//                 </button><button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image src="/close.svg" width={30} height={30} alt="logo" />
//                   ) : (
//                     <Image
//                       src="/hamburger-menu.svg"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>