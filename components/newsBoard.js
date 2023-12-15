import { GiBattleAxe } from "react-icons/gi"
import {backGround} from "../public/images/backGround.jpeg"
import Image from "next/image"
export default  function NewsBoard(){
    return (
        <div className="w-full h-screen">
            <div className="w-full h-24 flex items-center justify-center">
                     <hr className="w-2/5 bg-red-900 mr-3 h-1" />
                     <GiBattleAxe className="text-red-900 text-3xl md:text-5xl rounded-3xl "/>
                       <hr className="w-2/5 bg-red-900 h-1 ml-3"/>
                </div>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat consequuntur laboriosam molestiae aperiam fugit eum, ipsum iusto harum, fugiat, minima suscipit numquam possimus quas nemo culpa. Unde, voluptatibus in?</h1>
                </div>
        </div>
    )
}