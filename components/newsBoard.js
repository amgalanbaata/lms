import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
import ImageSlide from "./imageSlide"
export default  function NewsBoard(){
    return (
        <div className="w-full h-full bg-[#A9D6E5] ">
            <div className="w-full h-24 flex items-center justify-center bg-slate-100">
                     <hr className="w-2/5 bg-black mr-3 h-0.5 border-0" />
                     <img src="/images/LMS_logo.png" width={60} alt="" />
                       <hr className="w-2/5 bg-black h-0.5 ml-3 border-0"/>
                </div>
                <div className="bg-[#A9D6E5] h-screen  md:flex border-myColor text-center  inline md:justify-center items-center text-[#012A4A]">
                    <div className="bg-myColor rounded-sm border-2 flex border-myColor md:ml-10 md:rounded-2xl">
                    {/* <ImageSlide/> */}
                        <img className="rounded-sm shadow-md" src="/image/screenShot2.png" width={1000} height={1000} alt="" />
                        
                    </div>
                    <div className="md:inline justify-center md:w-4/5 h-full mb-10">
                <div className="mt-16 text-center items-center justify-around md:m-10 mb-10 ">
                    <h1 className="text-3xl md:text-5xl  text-[#012A4A] font-sans mb-3"><strong>Онлайн видео уулзалтууд</strong></h1>
                    <p className="text-[#012A4A] text-start ml-2">
Онлайн видео хурлаар дамжуулан илүү сайн харилцах, хамтран ажиллах, санаа бодлоо илэрхийлэх. Ширээний камер эсвэл гадаад камерыг онлайн видео уулзалтад ашиглаж, төөрөгдөл, ойлгомжгүй  байдалд орон зай үлдээлгүй нүүр тулсан хамтын ажиллагаагаар зөвшилцөлд хүрээрэй.</p>
                </div>
                <div className="text-[#012A4A] text-start ml-2  justify-around md:grid md:grid-cols-2 md:gap-8 md:m-10 grid grid-cols-1 gap-8">
                    <div><h1 className="text-[#012A4A] text-2xl">Давуу тал</h1>
                    <p className="text-[#012A4A]">Та хотоос гадуур амьдардаг хайртай дотны хүмүүстэйгээ холбогдох, ажил дээрээ хамт олонтойгоо синхрончлох эсвэл онлайн хичээлд суух гэж байгаа ч бай видео хурал энд байх болно.</p></div>
                    <div>
                        <h1 className="text-2xl">Өндөр чанартай аудио</h1>
                        <p className="text-[#012A4A]">Гөлгөр холболтын хувьд хүн бүр таныг сонсож байгаа эсэхийг шалгахын тулд шаардлагагүй хэдэн минут зарцуулахын оронд та бэлэн болмогц уулзалтыг чанартай аудиогоор эхлүүлнэ. Чанартай аудио нь видео хурлын туршлагыг төгс болгодог.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Аюулгүй байдал</h1>
                        <p className="text-[#012A4A]">Яг л нүүр тулсан уулзалтын нэгэн адил та бизнесийн санхүү, компанийн стратеги гэх мэт чухал мэдээллийг видео хурлаар хуваалцах нь ойлгомжтой. Тиймээс, хэрэв та үнэгүй видео хурлын програм хангамж ашиглаж байгаа бол таны сонгосон ямар ч сонголт таны өгөгдлийн аюулгүй байдлыг нэн тэргүүнд тавьж байгаа эсэхийг шалгаарай.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Хандахад хялбар</h1>
                        <p className="text-[#012A4A]">Шилдэг үнэгүй видео хурлын программ хангамжийг хайж олохын зэрэгцээ уулзалтад нэгдэхийн тулд хэдхэн товшилтоор вэб хөтчөөс шууд хурал үүсгэж, ажиллуулах боломжийг танд олгоно.</p>
                    </div>
                </div>
                </div>
                    </div>
        </div>
    )
}