import React from 'react'


// importing plantpots images

import whitePot from '../../assets/img/plantpots/dunes.png'
import aristoPot from '../../assets/img/plantpots/bell.png'
import opaldeligtPot from '../../assets/img/plantpots/mudbowl.png'
import timelessPot from '../../assets/img/plantpots/rosy.png'
import radiancePot from '../../assets/img/plantpots/whiteamour.png'
import reflectionPot from '../../assets/img/plantpots/mudcoral.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Element } from 'react-scroll'



const Claypots = () => {

    const featured = [
        {

            img: whitePot,
            id: 1,
            name: "Dunes",
            tag: "featured"
        },
        {
            img: aristoPot,
            id: 2,
            name: "Bell",
            tag: "Hot selling"
        },
        {
            img: opaldeligtPot,
            id: 3,
            name: "Mud Bowl",
            tag: "Trending"
        },
        {
            img: timelessPot,
            id: 4,
            name: "Rosy",
            tag: "featured"
        },
        {
            img: radiancePot,
            id: 5,
            name: "Radiance",
            tag: "featured"
        },
        {
            img: reflectionPot,
            id: 1,
            name: "Mud Coral",
            tag: "featured"
        },
    ]
    return (
        <div>

            <Element id='products'>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:leading-tight dark:text-black">
                            Clay Pot Classics
                        </h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Discover the timeless allure of traditional clay pots, adding rustic charm and natural warmth to your green haven in an instant.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            featured.map((item) => (
                                <div className="group hidden sm:block" >
                                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl shadow-xl overflow-hidden  ">
                                        <img
                                            className="size-full absolute top-0 start-0 object-contain group-hover:scale-110 transition-transform duration-1000 ease-in-out rounded-xl"
                                            src={item.img}
                                            alt="Image Description"
                                        />
                                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                            {item.name}
                                        </span>
                                        {/* <h3 className={`text-xl absolute top-[45%] left-[30%] group-hover:scale-150 transition-transform duration-100 ease-in-out gradient-text  hidden group-hover:block font-bold`}>
                                            {item.name}
                                        </h3> */}
                                    </div>

                                </div>
                            ))
                        }

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //   clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper  w-full relative"

                        >
                            {
                                featured.map((item) => (
                                    <SwiperSlide>
                                        <div className="group block sm:hidden" >
                                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl shadow-xl overflow-hidden  ">
                                                <img
                                                    className="size-full absolute top-0 start-0 object-contain group-hover:scale-110 transition-transform duration-1000 ease-in-out rounded-xl"
                                                    src={item.img}
                                                    alt="Image Description"
                                                />
                                                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                                    {item.name}
                                                </span>
                                                {/* <h3 className={`text-xl absolute top-[45%] left-[30%] group-hover:scale-150 transition-transform duration-100 ease-in-out gradient-text  hidden group-hover:block font-bold`}>
                                                    {item.name}
                                                </h3> */}
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>


                    </div>
                </div>

            </Element>

        </div>
    )
}

export default Claypots
