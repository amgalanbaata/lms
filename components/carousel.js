"use client";
// import {Alert} from "flowbite"
import { Carousel } from "flowbite";
import { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";
import { InstanceOptions } from "flowbite";
export default function MyCarousel() {
    return (
        <div
            id="controls-carousel"
            className="relative w-full"
            data-carousel="static"
        >
            <div class="relative h-[calc(50vh-70px)] sm:h-[calc(70vh-90px)] md:h-[calc(100vh-70px)]  overflow-hidden rounded-lg">
                {/* relative  sm:h-[calc(70vh-70px)] md:h-[calc(100vh-70px)]  overflow-hidden rounded-lg */}
                <div
                    className="hidden duration-700 ease-in-out h-full"
                    data-carousel-item
                >
                    <img
                        src="/images/images1.webp"
                        className="absolute block w-full h-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                        height={1000}
                        width={1000}
                    />
                </div>
                {/* <!-- Item 2 --> */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                >
                    <img
                        src="/images/images2.webp"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 3 --> */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src="/images/image3.webp"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 4 --> */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src="/images/images4.webp"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 5 --> */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src="/images/images5.webp"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
