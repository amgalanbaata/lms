"use client"
import { motion } from "framer-motion"

export default function MySlider() {
    return(
        <div>
            <div className="w-full h-24 flex items-center justify-center bg-slate-50">
                    <hr className="w-2/5 bg-black mr-3 h-0.5 border-0" />
                    <img src="/images/LMS_logo.png" width={60} alt=""/>
                    <hr className="w-2/5 bg-black h-0.5 ml-3 border-0"/>
                </div>
    <div className="bg-slate-100 px-56 py-24"> 
        <div className="w-full h-full text-center justify-center grid grid-cols-1 gap-16 items-center bg-slate-300">
            <h1 className="sm:text-4xl text-slate-700"><strong><i>LMS вэб</i></strong></h1>
            <p className="sm:text-2xl text-slate-500"><strong className="text-blue-700">LMS Web</strong> нь татаж авахгүйгээр програмын онлайн хувилбар юм. Та өөрийн компьютер эсвэл ухаалаг гар утсан дээрх дурын хөтчөөр дамжуулан үйлчилгээнд нэвтэрч болно. Та линкээр орж хэрэглэгчийн нэр, нууц үгээ оруулахад л хангалттай.</p>
            <motion.button className=" sm:w-56 mx-auto text-slate-50 bg-[#3968d9] rounded-xl py-2  hover:text-white"
                whileHover={{scale: 1,
                    textShadow: "0px  0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                ><strong><i>Join LMS</i></strong></motion.button>
            <p className="sm:text-2xl text-slate-500"><strong className="text-blue-700 font-mono mr-2"><i>LMS</i></strong>вэбийг хөтөч дээрээ шууд нээнэ үү:</p>
                
            <hr className="w-full"/>
        </div>
    </div>
    </div>
    )
}