


export default function ImageSlide(){
    return(
        <div class="flex min-h-screen items-center justify-center bg-[#A9D6E5]">
  <div class="mx-auto max-w-6xl px-6 w-full bg-[#A9D6E5]">
    <div class="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
      <div class="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://resources.owllabs.com/hs-fs/hubfs/webex%20best%20video%20meeting%20apps.jpg?width=672&name=webex%20best%20video%20meeting%20apps.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
                <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/654bd0e27104a3b3f1945291_4_Webex%20Meetings.webp" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg" alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
              <div>
              <img src="/images/LMS_logo.white.png" width={30} alt="" />
                <p class="text-gray-300">Learning Management System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div class="fixed bottom-10 right-10">
    <p class="text-xl font-semibold text-white">Images are from <a href="https://pixabay.com" class="lowercase text-blue-500">pixabay.com</a></p>
  </div> */}
</div>

    )
}