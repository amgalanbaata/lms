import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
export default  function NewsBoard(){
    return (
        <div className="w-full h-full bg-myColor ">
            <div className="w-full h-24 flex items-center justify-center bg-slate-200">
                     <hr className="w-2/5 bg-black mr-3 h-0.5 border-0" />
                     <img src="/images/LMS_logo.png" width={60} alt="" />
                       <hr className="w-2/5 bg-black h-0.5 ml-3 border-0"/>
                </div>
                <div className="bg-slate-200 h-screen  border-myColor text-center  md:flex inline md:justify-center items-center ">
                    <div className="bg-myColor border-2 border-myColor md:ml-10 md:rounded-2xl">
                        <img src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/654bd1561d8a399c72983408_7_Slack.webp" width={1000} height={1000} alt="" />
                    </div>
                    <div className="md:inline justify-center md:w-4/5">
                <div className="mt-24 text-start items-center justify-around md:m-10 mb-10 md:mb-28">
                    <h1 className="text-3xl md:text-5xl  text-blue-500 font-sans"><strong>Онлайн видео уулзалтууд</strong></h1>
                    <p className="text-slate-600">
Онлайн видео хурлаар дамжуулан илүү сайн харилцах, хамтран ажиллах, санаа бодлоо илэрхийлэх. Ширээний камер эсвэл гадаад камерыг онлайн видео уулзалтад ашиглаж, төөрөгдөл, ойлгомжгүй  байдалд орон зай үлдээлгүй нүүр тулсан хамтын ажиллагаагаар зөвшилцөлд хүрээрэй.</p>
                </div>
                <div className="text-black text-start justify-around md:grid md:grid-cols-2 md:gap-8 md:m-10 grid grid-cols-1 gap-8">
                    <div><h1 className="text-black text-2xl">Давуу тал</h1>
                    <p className="text-slate-500">Та хотоос гадуур амьдардаг хайртай дотны хүмүүстэйгээ холбогдох, ажил дээрээ хамт олонтойгоо синхрончлох эсвэл онлайн хичээлд суух гэж байгаа ч бай видео хурал энд байх болно.</p></div>
                    <div>
                        <h1 className="text-2xl">Өндөр чанартай аудио</h1>
                        <p className="text-slate-500">Гөлгөр холболтын хувьд хүн бүр таныг сонсож байгаа эсэхийг шалгахын тулд шаардлагагүй хэдэн минут зарцуулахын оронд та бэлэн болмогц уулзалтыг чанартай аудиогоор эхлүүлнэ. Чанартай аудио нь видео хурлын туршлагыг төгс болгодог.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Аюулгүй байдал</h1>
                        <p className="text-slate-500">Яг л нүүр тулсан уулзалтын нэгэн адил та бизнесийн санхүү, компанийн стратеги гэх мэт чухал мэдээллийг видео хурлаар хуваалцах нь ойлгомжтой. Тиймээс, хэрэв та үнэгүй видео хурлын програм хангамж ашиглаж байгаа бол таны сонгосон ямар ч сонголт таны өгөгдлийн аюулгүй байдлыг нэн тэргүүнд тавьж байгаа эсэхийг шалгаарай.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Хандахад хялбар</h1>
                        <p className="text-slate-500">Шилдэг үнэгүй видео хурлын программ хангамжийг хайж олохын зэрэгцээ уулзалтад нэгдэхийн тулд хэдхэн товшилтоор вэб хөтчөөс шууд хурал үүсгэж, ажиллуулах боломжийг танд олгоно.</p>
                    </div>
                </div>
                </div>
                    </div>
        </div>
    )
}