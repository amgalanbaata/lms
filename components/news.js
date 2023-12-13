import { GiBattleAxe } from "react-icons/gi";

export default function News(){
    return(
        <div className="w-full bg-white mz-5">
             <div className="w-full h-24 flex items-center justify-center">
                     <hr className="w-24 bg-red-900 mr-3 h-1" />
                     <GiBattleAxe className="text-red-700 text-3xl rounded-3xl "/>
                       <hr className="w-24 bg-red-900 h-1 ml-3" />
                </div>
                <div className="bg-red-900 grid md:grid-cols-3 gap-8 items-center text-center w-full pl-1 pt-5 md:pl-10 md:py-10">
                    <img className="rounded-md hover:h-60 hover:duration-100" src="https://media.istockphoto.com/id/1329836000/photo/signpost-with-national-flags-of-different-countries.jpg?s=2048x2048&w=is&k=20&c=UG5Ho76EizFzJC9ZOR-uRZMOv_5CsW3mepw4z72wKEU=" width={400} height={200} alt="" />
                    <img className="rounded-md" src="https://media.istockphoto.com/id/1299152059/photo/young-woman-global-communications.jpg?s=2048x2048&w=is&k=20&c=X3rMXTZIzClFrMKbeg5BLlat_cfBIAAuIygGPL8odak=" width={400} height={200} alt="/public/image/image1.jpg" />
                    <img className="rounded-md" src="https://media.istockphoto.com/id/1127447341/photo/network-of-business-concept.jpg?s=2048x2048&w=is&k=20&c=5mHkQ55aUYovM6XE8VFOVl1i623RO0aPLqax38Xh7ho=" width={400} height={200} alt="" />
                    <img className="rounded-md" src="https://media.istockphoto.com/id/937126944/photo/business-people-working.jpg?s=2048x2048&w=is&k=20&c=0CpnaW7fVpKbS9BXLbnvqHXu9MBLPoryer8ZqUa_bpg="width={400} height={200} alt="" />
                    <img className="rounded-md" src="https://media.istockphoto.com/id/1250474132/photo/hand-touching-virtual-world-with-connection-network-global-data-information-and-technology.jpg?s=2048x2048&w=is&k=20&c=JOtEPdp0feKS_1vmrmWWiQm5O3IWzA-qeZm85ZWToBw=" width={400} height={200} alt="" />
                    <img className="rounded-md" src="https://media.istockphoto.com/id/1329836000/photo/signpost-with-national-flags-of-different-countries.jpg?s=2048x2048&w=is&k=20&c=UG5Ho76EizFzJC9ZOR-uRZMOv_5CsW3mepw4z72wKEU=" width={400} height={300} alt="" />
                </div>
        </div>
    )
};