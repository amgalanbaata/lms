"use client"
import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
import ImageSlide from "./imageSlide"
import { motion } from "framer-motion"
export default  function NewsBoard(){
    return (
        <div className="w-full h-full bg-myColor">
            <div className="w-full h-24 flex items-center justify-center bg-myColor">
                     <hr className="w-2/5 bg-white mr-3 h-0.5 border-0" />
                     <img src="/images/LMS_logo.white.png" width={60} alt="" />
                       <hr className="w-2/5 bg-white h-0.5 ml-3 border-0"/>
                </div>
            
                    <div className="bg-myColor inline md:flex items-center h-full">
                        <div className="text-4xl sm:w-2/4 sm:leading-loose justify-center items-center inline md:rounded-2xl md:p-24 shadow-lg p-3">
                        <h1 className="sm:text-5xl slate-50 text-2xl md:py-10 text-center font-sans"><strong><i>LMS</i></strong>-д тавтай морил</h1>
                            <div class="mx-auto md:inline max-w-6xl px-6 w-full bg-myColor py-10 md:w-2/4">
    <div class=" flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
      <div class="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/card1.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p className="text-2xl">Өндөр чанартай аудио</p>
                <img src="/images/LMS_logo.white.png" width={30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/card2.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
              <p className="text-2xl">Вебинарын онцлогууд</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/card3.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p className="text-2xl">Чатлах</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="rounded-r-lg h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/image/card4.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <p className="text-2xl">Хэрэглэгчийн дэмжлэг</p>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
                        </div>
                        <img className="sm:w-2/4" src="/image/screenShot2.png" width={500} height={500} alt="" />
                        </div>
        </div>
    )
}