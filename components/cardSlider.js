"use client"
import{motion} from "framer-motion"



export default function CardSlider() {
    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-24 m-1">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-xl">
            <div className="h-96 w-full sm:w-96">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/image/cardSlider1.webp" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Онлайн видео уулзалтууд</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            See More
                        </motion.button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/image/cardSlider2.webp" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Аюулгүй байдал</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            See More
                        </motion.button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/image/cardSlider3.webp" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Хандахад хялбар</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            See More
                        </motion.button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/image/cardSlider4.webp" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Онлайн видео уулзалтууд</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <motion.button className="hidden md:mr-4 md:block text-slate-50 bg-bColor hover:bg-myColor rounded-full  hover:text-white py-1 px-3.5 font-com text-sm capitalize shadow shadow-black/60"
                        whileHover={{scale: 1,
                            textShadow: "0px  0px 2px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 2px rgb(255,255,255)",
                        }}>
                            See More
                        </motion.button>
            </div>
          </div>
        </div>
      </div>
    )
}