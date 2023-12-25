"use client"
import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
import ImageSlide from "./imageSlide"
import { motion } from "framer-motion"
export default  function NewsBoard(){
    return (
        <div className="w-full h-full">
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                     <hr className="w-2/5 bg-white mr-3 h-0.5 border-0" />
                     <img src="/images/LMS_logo.white.png" width={60} alt="" />
                       <hr className="w-2/5 bg-white h-0.5 ml-3 border-0"/>
                </div>
            
                    <div className="bg-myColor inline sm:flex items-center">
                        <motion.div className="text-4xl font-serif sm:w-2/4 sm:leading-loose justify-center items-center inline md:rounded-2xl md:p-24 shadow-lg p-3">
                            <h1 className="text-slate-100 sm:text-5xl sm:mb-16 text-center">Давуу тал</h1>
                            <p className="text-slate-100 text-justify text-xl px-2 sm:text-3xl sm:leading-loose">Та хотоос гадуур амьдардаг хайртай дотны хүмүүстэйгээ холбогдох, ажил дээрээ хамт олонтойгоо синхрончлох эсвэл онлайн хичээлд суух гэж байгаа ч бай видео хурал энд байх болно.</p>
                        </motion.div>
                        <img className="sm:w-2/4" src="/image/screenShot2.png" width={1000} height={1000} alt="" />
                        </div>
                    

                    {/* <div className="md:inline sm:inline justify-center md:w-4/5 px-2">
                <div className="mt-16 text-center items-center justify-around md:m-10 mb-10 bg-slate-100 rounded-3xl p-3 md:p-10 shadow-lg hover:shadow-xl">
                    <h1 className="text-3xl md:text-5xl  text-[#012A4A] font-sans mb-3 "><strong>Онлайн видео уулзалтууд</strong></h1>
                    <p className="text-[#012A4A] text-justify px-1">
Онлайн видео хурлаар дамжуулан илүү сайн харилцах, хамтран ажиллах, санаа бодлоо илэрхийлэх. Ширээний камер эсвэл гадаад камерыг онлайн видео уулзалтад ашиглаж, төөрөгдөл, ойлгомжгүй  байдалд орон зай үлдээлгүй нүүр тулсан хамтын ажиллагаагаар зөвшилцөлд хүрээрэй.</p>
                </div>
                <div className="text-[#012A4A] text-start  justify-around md:grid md:grid-cols-2 md:m-5 grid grid-cols-1 gap-8 pb-5">
                    <div className="bg-slate-100 rounded-3xl p-3 md:p-8 shadow-lg hover:shadow-xl">
                        <h1 className="text-[#012A4A] text-2xl">Давуу тал</h1>
                    <p className="text-[#012A4A] text-justify">Та хотоос гадуур амьдардаг хайртай дотны хүмүүстэйгээ холбогдох, ажил дээрээ хамт олонтойгоо синхрончлох эсвэл онлайн хичээлд суух гэж байгаа ч бай видео хурал энд байх болно.</p></div>
                    <div className="bg-slate-100 rounded-3xl p-3 shadow-lg md:p-8 hover:shadow-xl">
                        <h1 className="text-2xl">Өндөр чанартай аудио</h1>
                        <p className="text-[#012A4A] text-justify">Гөлгөр холболтын хувьд хүн бүр таныг сонсож байгаа эсэхийг шалгахын тулд шаардлагагүй хэдэн минут зарцуулахын оронд та бэлэн болмогц уулзалтыг чанартай аудиогоор эхлүүлнэ. Чанартай аудио нь видео хурлын туршлагыг төгс болгодог.</p>
                    </div>
                    <div className="bg-slate-100 rounded-3xl p-3 shadow-lg md:p-8 hover:shadow-xl">
                        <h1 className="text-2xl">Аюулгүй байдал</h1>
                        <p className="text-[#012A4A] text-justify">Яг л нүүр тулсан уулзалтын нэгэн адил та бизнесийн санхүү, компанийн стратеги гэх мэт чухал мэдээллийг видео хурлаар хуваалцах нь ойлгомжтой. Тиймээс, хэрэв та үнэгүй видео хурлын програм хангамж ашиглаж байгаа бол таны сонгосон ямар ч сонголт таны өгөгдлийн аюулгүй байдлыг нэн тэргүүнд тавьж байгаа эсэхийг шалгаарай.</p>
                    </div>
                    <div className="bg-slate-100 rounded-3xl p-3 shadow-lg md:p-8 hover:shadow-xl">
                        <h1 className="text-2xl">Хандахад хялбар</h1>
                        <p className="text-[#012A4A] text-justify">Шилдэг үнэгүй видео хурлын программ хангамжийг хайж олохын зэрэгцээ уулзалтад нэгдэхийн тулд хэдхэн товшилтоор вэб хөтчөөс шууд хурал үүсгэж, ажиллуулах боломжийг танд олгоно.</p>
                    </div>
                </div>
                </div> */}
        </div>
    )
}