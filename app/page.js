import Image from "next/image";
import Component from "@/components/component";
import background from "../public/images/backGround.jpeg"
export default function Home() {
    return (
        <main className="">
                <Component />    
        </main>
    );
}

{/* <div className="relative w-full">
                <div className="absolute -z-10 w-full">
                    <Image 
                    src={backGround} alt="background image" className="w-full bg-fixed top-0"
                    width={1000}
                    height={1000}
                    >
                    
                    </Image>
                </div>
            </div> */}