"use client"
import { GiBattleAxe } from "react-icons/gi";
import { motion } from "framer-motion";
import {useState} from "react"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function News(){

const [show, setShow]= useState (false);


    return(
      <div className="bg-slate-100 h-full">
        <div className="md:pb-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-10 justify-center items-center md:p-10 text-center p-2 bg-red-200">

                      <div class="max-w-sm bg-myColor border border-gray-200 dark:bg-myColor dark:border-gray-700 rounded-lg shadow-2xl">
                              <img className="lg:h-80 rounded-t-lg" src="/image/image5.webp" width={600} height={800} alt="" />
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Whereby</h5>
                              </a>
                              
                              <motion.button onClick={()=>setShow(!show)} className=" mx-auto text-slate-50  rounded-xl py-2 "
                                      whileHover={{scale: 1.1,
                                      }}
                                      ><strong><i className="flex items-center">Read more{show ?(<FaLongArrowAltUp className="ml-2 hover:underline"/>):(<FaLongArrowAltDown className="ml-2 hover:underline"/>)}</i></strong></motion.button>
                                      <p  class={`mb-3 font-normal text-gray-50 dark:text-gray-400 text-justify ${show ? "block" : "hidden"} `}>Ингэснээр өөр өөр хэмжээтэй хувь хүмүүс болон багуудад зориулсан видео хурлын програм хангамж юм. Та 2 эсвэл 100 хүнтэй уулзаж байгаа эсэхээс үл хамааран бусад видео хурлын хэрэглүүрээс үүдэлтэй техникийн толгой өвдөхгүйгээр аль болох энгийн уулзалт зохион байгуулж, явуулах боломжийг танд олгоно.</p>
                          </div>
                      </div>

                      <div class="max-w-sm bg-myColor border border-gray-200 shadow dark:bg-myColor dark:border-gray-700 rounded-lg ">
                              <img className="lg:h-80 rounded-t-lg" src="/image/image5.webp" width={600} height={800} alt="" />
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Whereby</h5>
                              </a>
                              
                              <motion.button onClick={()=>setShow(!show)} className=" mx-auto text-slate-50  rounded-xl py-2 "
                                      whileHover={{scale: 1.1,
                                      }}
                                      ><strong><i className="flex items-center">Read more{show ?(<FaLongArrowAltLeft className="ml-2 hover:underline"/>):(<FaLongArrowAltRight className="ml-2 hover:underline"/>)}</i></strong></motion.button>
                                      <p  class={`mb-3 font-normal text-gray-50 dark:text-gray-400 text-justify ${show ? "block" : "hidden"} `}>Ингэснээр өөр өөр хэмжээтэй хувь хүмүүс болон багуудад зориулсан видео хурлын програм хангамж юм. Та 2 эсвэл 100 хүнтэй уулзаж байгаа эсэхээс үл хамааран бусад видео хурлын хэрэглүүрээс үүдэлтэй техникийн толгой өвдөхгүйгээр аль болох энгийн уулзалт зохион байгуулж, явуулах боломжийг танд олгоно.</p>
                          </div>
                      </div>

                      <div class="max-w-sm bg-myColor border border-gray-200 shadow dark:bg-myColor dark:border-gray-700 rounded-lg ">
                              <img className="lg:h-80 rounded-t-lg" src="/image/image5.webp" width={600} height={800} alt="" />
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Whereby</h5>
                              </a>
                              
                              <motion.button onClick={()=>setShow(!show)} className=" mx-auto text-slate-50  rounded-xl py-2 "
                                      whileHover={{scale: 1.1,
                                      }}
                                      ><strong><i className="flex items-center">Read more{show ?(<FaLongArrowAltLeft className="ml-2 hover:underline"/>):(<FaLongArrowAltRight className="ml-2 hover:underline"/>)}</i></strong></motion.button>
                                      <p  class={`mb-3 font-normal text-gray-50 dark:text-gray-400 text-justify ${show ? "block" : "hidden"} `}>Ингэснээр өөр өөр хэмжээтэй хувь хүмүүс болон багуудад зориулсан видео хурлын програм хангамж юм. Та 2 эсвэл 100 хүнтэй уулзаж байгаа эсэхээс үл хамааран бусад видео хурлын хэрэглүүрээс үүдэлтэй техникийн толгой өвдөхгүйгээр аль болох энгийн уулзалт зохион байгуулж, явуулах боломжийг танд олгоно.</p>
                          </div>
                      </div>

                      <div class="max-w-sm bg-myColor border border-gray-200 shadow dark:bg-myColor dark:border-gray-700 rounded-lg ">
                              <img className="lg:h-80 rounded-t-lg" src="/image/image5.webp" width={600} height={800} alt="" />
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Whereby</h5>
                              </a>
                              
                              <motion.button onClick={()=>setShow(!show)} className=" mx-auto text-slate-50  rounded-xl py-2 "
                                      whileHover={{scale: 1.1,
                                      }}
                                      ><strong><i className="flex items-center">Read more{show ?(<FaLongArrowAltLeft className="ml-2 hover:underline"/>):(<FaLongArrowAltRight className="ml-2 hover:underline"/>)}</i></strong></motion.button>
                                      <p  class={`mb-3 font-normal text-gray-50 dark:text-gray-400 text-justify ${show ? "block" : "hidden"} `}>Ингэснээр өөр өөр хэмжээтэй хувь хүмүүс болон багуудад зориулсан видео хурлын програм хангамж юм. Та 2 эсвэл 100 хүнтэй уулзаж байгаа эсэхээс үл хамааран бусад видео хурлын хэрэглүүрээс үүдэлтэй техникийн толгой өвдөхгүйгээр аль болох энгийн уулзалт зохион байгуулж, явуулах боломжийг танд олгоно.</p>
                          </div>
                      </div>
                </div>
         </div>
    )
};






{/* <div class="group relative h-96 w-96 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
<img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/newsImage.5.jpg" alt="" />
<div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
  <div class="absolute inset-x-5 bottom-6">
    <div class="flex gap-3 text-white">
      <div>
        <p className="text-slate-200 text-xs text-justify">Уулзалтын бичлэг хийх чадвар
Та өөрийн баг эсвэл хамтран ажиллагсадтайгаа бодит цаг хугацаанд санал бодлоо хуваалцах боломжтой биечлэн уулзах уулзалтанд оролцохоос өөр юу ч байхгүй.
Гэхдээ бичлэг хийснээр тэр мэдлэгээ хадгалж, дараа нь хуваалцаж, уулзалтуудаа дахин дахин ашиглаж болох сургалтын хэрэглэгдэхүүн болгон хувиргах боломжтой.</p>
      <img src="/images/LMS_logo.white.png" width={30} alt="" />
      </div>
    </div>
  </div>
</div>
</div> */}






                    {/* <div className=" bg-slate-100 shadow-xl md:w-4/5 md:mx-auto md:flex  rounded-md text-black md:rounded-2xl md:justify-around md:py-24 mb-10">
                        <div >
                        <img className="rounded-md" src="/image/newsImage.1.jpg" width={400} height={200} alt="" />
                        </div>
                    
                    <div className=" grid  justify-self-stretch md:justify-center md:items-center  md:text-center md:inline h-auto md:w-3/6">
                    <h1 className="md:mt-10 md:mb-10 mb-5 mt-5"><strong>Видео чадвар</strong></h1>
                    <p className="text-gray-800 px-2 text-justify">Маш сайн видео хурлын систем нь өөр өөр зурвасын өргөнд сайн ажиллаж, олон тохиргооны сонголтоор хангаж, сайн чанарын видео хүргэхийн тулд төхөөрөмжийн камертай сайн синк хийх ёстой.</p>
                    </div>
                    </div>
                    <hr className="my-6 w-4/5 md:hidden  border-[#3968d9]  sm:mx-auto lg:my-8"/>
                                        
                    <div className=" md:p-24 md:flex rounded-md text-black md:rounded-2xl md:justify-around mb-10 md:mb-10 md:mt-5 bg-slate-100 shadow-xl md:w-4/5 md:mx-auto">
                    <div className="grid  justify-self-stretch md:justify-center md:items-center md:text-center md:inline h-auto md:w-2/6">
                    <h1 className="md:mt-10 md:mb-10 mb-5 mt-5"><strong>Чатлах</strong></h1>
                    <p className="text-gray-800 px-2 text-justify">Видео болон аудио нь уулзалтын гайхалтай туршлагын үндэс болдог ч чат нь хэрэглэгчдэд санал бодлоо хуваалцах, уулзалтыг бүхэлд нь тасалдуулахгүйгээр тусдаа харилцан яриа өрнүүлэхэд тусалдаг.</p>
                    </div>
                    <img className="rounded-md" src="/image/newsImage.3.png" width={600} height={600} alt="" />
                    </div>
                    <hr className="w-4/5 mx-auto border-[#3968d9] hidden md:hidden"/>
                    <div className=" md:flex rounded-md text-black md:rounded-2xl md:justify-around md:mt-5 md:py-24 bg-slate-100 shadow-xl md:w-4/5 md:mx-auto mb-10">
                    <img className="rounded-md" src="/image/newsImage.2.jpg" width={600} height={400} alt="" />
                    <div className=" grid  justify-self-stretch md:justify-center md:items-center md:text-center md:inline h-auto md:w-2/6">
                    <h1 className="md:mt-10 md:mb-10 mb-5 mt-5"><strong>Үнэгүй видео хурлын програмаас ямар боломжуудыг авч болох вэ?</strong></h1>
                    <p className="text-gray-800 px-2 text-justify">Танд зөв програм сонгоход туслахын тулд бид видео хурлын програмыг сонгохдоо анхаарах ёстой хамгийн чухал шинж чанаруудыг жагсаав. Тиймээс, үнэ төлбөргүй гэдэг үгнээс гадна та юу авч байгаа, ямар үнэ цэнийг хүлээж болох талаар жинлэх нь чухал юм. Хэрэв та эцэст нь үнэ төлбөргүй шатлалаас цааш өргөжүүлэхээр шийдсэн бол энэ нь ялангуяа чухал юм.</p>
                    </div>
                    </div>
                    <hr className="w-4/5 mx-auto border-[#3968d9] hiden md:hidden"/>
                    <div className=" md:flex rounded-md justify-around text-black md:rounded-2xl md:justify-around md:mb-10 mb-5 md:p-24 bg-slate-100 shadow-xl md:w-4/5 md:mx-auto mt-10">
                    <div className="grid  justify-self-stretch md:justify-center md:items-center md:text-center md:inline h-auto md:w-2/6">
                    <h1 className="md:mt-10 md:mb-10 mb-5 mt-5"><strong>Дэлгэц хуваалцах</strong></h1>
                    <p className="text-gray-800 px-2 text-justify">Дэлгэц хуваалцах нь аливаа харилцан ярианд контекст оруулах хүчирхэг хэрэгслийг санал болгодог. Сонирхолтой танилцуулга, үзүүлэнг хуваалцаж, тайлбар хийж, өөрийн дэлгэцээ хүн бүрт харагдахуйц дижитал самбар болгон хувиргаснаар багтайгаа виртуалаар холбогдоорой.</p>
                    </div>
                    <img className="rounded-md" src="/image/newsImage.4.png" width={600} height={400} alt="" />
                    </div>
                    <hr className="w-4/5 mx-auto md:hidden border-[#3968d9]"/> */}
                    {/* <div c
                    lassName="shadow-xl bg-slate-50 md:w-4/5 md:mx-auto justify-around md:flex rounded-md text-black md:rounded-2xl md:justify-around md:mb-10  mt-10 md:p-24">
                    <img className="rounded-md" src="/image/newsImage.5.jpg" width={600} height={400} alt="" />
                    <div className=" grid justify-self-stretch md:justify-center md:items-center md:text-center md:inline h-auto md:w-2/6">
                    <h1 className="md:mt-10 md:mb-10 mb-5 mt-5"><strong>Уулзалтын бичлэг хийх чадвар</strong></h1>
                    <p className="text-gray-800 px-2 text-justify mb-5">Уулзалтын бичлэг хийх чадвар
Та өөрийн баг эсвэл хамтран ажиллагсадтайгаа бодит цаг хугацаанд санал бодлоо хуваалцах боломжтой биечлэн уулзах уулзалтанд оролцохоос өөр юу ч байхгүй.
Гэхдээ бичлэг хийснээр тэр мэдлэгээ хадгалж, дараа нь хуваалцаж, уулзалтуудаа дахин дахин ашиглаж болох сургалтын хэрэглэгдэхүүн болгон хувиргах боломжтой.</p>
                    </div>
                    </div> */}