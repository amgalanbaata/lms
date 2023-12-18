import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
export default  function NewsBoard(){
    return (
        <div className="w-full h-full bg-slate-200 ">
            <div className="w-full h-24 flex items-center justify-center bg-slate-50">
                     <hr className="w-2/5 bg-myColor mr-3 h-0.5 border-0" />
                     <GiBattleAxe className="text-myColor text-3xl md:text-5xl rounded-3xl "/>
                       <hr className="w-2/5 bg-myColor h-0.5 ml-3 border-0"/>
                </div>
                <div className="bg-slate-200 h-screen border-2 border-myColor text-center  md:flex inline md:justify-center items-center ">
                    <div className="bg-myColor border-2 border-myColor">
                        <img src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg" width={1000} height={1000} alt="" />
                    </div>
                    <div className="md:inline justify-center m-5">
                <div className="mt-24 text-start items-center justify-around md:m-10 mb-10 md:mb-28">
                    <h1 className="text-3xl md:text-5xl  text-myColor"><strong>All in the details</strong></h1>
                    <p className="text-slate-500">Et eveniet iste quia earum delectus labore repellendus, ea aspernatur veritatis, consequatur incidunt <br /> quod, odit excepturi beatae unde praesentium totam itaque at?</p>
                </div>
                <div className="text-black text-start justify-around md:grid md:grid-cols-2 md:gap-8 md:m-10 grid grid-cols-1 gap-8">
                    <div><h1 className="text-black text-2xl">Durable</h1>
                    <p className="text-slate-500">The leather cover and machined steel disc binding stand up to daily use for years to come.</p></div>
                    <div>
                        <h1 className="text-2xl">Refilable</h1>
                        <p className="text-slate-500">Buy it once and refill as often as you need. Subscribe and save on routine refills.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Thoughtfully designed</h1>
                        <p className="text-slate-500">The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Locally made</h1>
                        <p className="text-slate-500">Responsibly and sustainably made real close to wherever you are, somehow.</p>
                    </div>
                </div>
                </div>
                    </div>
        </div>
    )
}