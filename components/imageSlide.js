"use client"
import { motion } from "framer-motion"


export default function ImageSlide(){

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
    return(
      <div>
      <div className="w-full h-24 flex items-center justify-center bg-myColor">
      <hr className="w-2/5 bg-gray-100 mr-3 h-0.5 border-0" />
      <img src="/images/LMS_logo.white.png" width={60} alt="" />
        <hr className="w-2/5 bg-gray-100 h-0.5 ml-3 border-0"/>
 </div>
        <div class="inline md:flex h-full items-center justify-center pb-24 bg-myColor"> 
  <div class="mx-auto max-w-6xl px-6 w-full bg-myColor py-10 md:w-3/6">
    <div class="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
      <div class="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/newsImage.3.png" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p>Маш сайн видео хурлын систем нь өөр өөр зурвасын өргөнд сайн ажиллаж, олон тохиргооны сонголтоор хангаж, сайн чанарын видео хүргэхийн тулд төхөөрөмжийн камертай сайн синк хийх ёстой.</p>
                <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/newsImage.1.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
              <p>Видео болон аудио нь уулзалтын гайхалтай туршлагын үндэс болдог ч чат нь хэрэглэгчдэд санал бодлоо хуваалцах, уулзалтыг бүхэлд нь тасалдуулахгүйгээр тусдаа харилцан яриа өрнүүлэхэд тусалдаг.</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300 text-xs">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/newsImage.4.png" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p>Дэлгэц хуваалцах нь аливаа харилцан ярианд контекст оруулах хүчирхэг хэрэгслийг санал болгодог. Сонирхолтой танилцуулга, үзүүлэнг хуваалцаж, тайлбар хийж, өөрийн дэлгэцээ хүн бүрт харагдахуйц дижитал самбар болгон хувиргаснаар багтайгаа виртуалаар холбогдоорой.</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/newsImage.5.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p>Уулзалтын бичлэг хийх чадвар
Та өөрийн баг эсвэл хамтран ажиллагсадтайгаа бодит цаг хугацаанд санал бодлоо хуваалцах боломжтой биечлэн уулзах уулзалтанд оролцохоос өөр юу ч байхгүй.
Гэхдээ бичлэг хийснээр тэр мэдлэгээ хадгалж, дараа нь хуваалцаж, уулзалтуудаа дахин дахин ашиглаж болох сургалтын хэрэглэгдэхүүн болгон хувиргах боломжтой.</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="md:w-2/5 mx-auto md:rounded-2xl">
    <div>
    {/* <h1>Эрхэм зорилго</h1> */}
    <h1 className={`text-4xl font-serif  justify-center bg-myColor text-start md:rounded-2xl md:p-24 shadow-lg p-3 text-slate-50${container, item}`}>МЭДЛЭГЭЭРЭЭ БАЯЛАГ БҮТЭЭЖ, МАНЛАЙЛАХ ЧАДВАРТАЙ, ЁС СУРТАХУУНТАЙ МЭРГЭЖИЛТЭН БЭЛТГЭНЭ</h1>
    </div>
  </div>
  {/* <div class="fixed bottom-10 right-10">
    <p class="text-xl font-semibold text-white"><a href="" class="lowercase text-blue-500">Learning Managenent System</a></p>
  </div> */}
</div>
</div>
    )
}