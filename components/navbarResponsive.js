"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
export default function MenuRes(){
    const [myButton, setMyButton]=useState(true);
    console.log(myButton)
    return(
        <div className="">
            <button onClick={()=> setMyButton(!myButton)} className="text-black
                text-2xl">{myButton ? (<GiHamburgerMenu />):(<BiMenuAltLeft/>)}</button>
    <motion.div className={`w-screen items-center text-start grid grid-cols-1 bg-myColor text-gray-50 top-14 rounded-l-2xl absolute right-0 h-60 ${myButton ? 'hidden' : 'block'}`}>
        
        <a className="ml-3 hover:underline font-bold" href="">Бүээгдэхүүн</a>
        <a className="ml-3 hover:underline font-bold"  href="">мэдээ</a>
        <a className="ml-3 hover:underline font-bold"  href="">Бидний тухай</a>
        <a className="ml-3 hover:underline font-bold"  href="">Дэлгэрэнгүй мэдээлэл</a>
        <a className="ml-3 hover:underline font-bold"  href="">тусламж</a>
                </motion.div>
        
        </div>
    )
}