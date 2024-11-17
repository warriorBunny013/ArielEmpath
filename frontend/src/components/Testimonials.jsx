import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const settings = {
        infinite: true,
        speed:1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        // dots:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots:true
                }
            }
        ]
    };

    return (
        <div className="flex-wrap font-serif font-extralight">
            
        <div className="mt-10 m-5 lg:m-20 py-5 text-4xl font-serif flex justify-center underline decoration-wavy decoration-green-500 underline-offset-8 decoration-2 tracking-tight text-black">Customer testimonials</div>
        
        <div className="m-5 lg:m-20 lg:text-lg">
            <Slider {...settings}>
            
                    <div className="p-2 max-w-sm bg-purple-200 text-black">
                        <div className="flex border rounded-lg h-full p-4 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="flex justify justify-between">
                                    <div className="flex p-1 gap-1 ">
                                        
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                       
                                            {/* <ion-icon key={i} name="star-outline"></ion-icon> */}
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <p className="leading-relaxed text-base  pb-10 ">
                                My reading was excellent, the PDF I received was easy to read and understand. I got my reading in a timely manner and it was thorough. I will definitely come back for another reading! Ariel is amazing!
                                </p>
                                <div className="flex gap-2 ">
                                    <div className="w-7 h-7 text-center rounded-full text-white bg-purple-700">
                                        N
                                    </div>
                                    <span>Nicole Wyzard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 max-w-sm bg-purple-200 text-black">
                        <div className="flex border rounded-lg h-full p-4 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="flex justify justify-between">
                                    <div className="flex p-1 gap-1 ">
                                        
                                           
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                        
                                       
                                            {/* <ion-icon key={i} name="star-outline"></ion-icon> */}
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <p className="leading-relaxed text-base  pb-10 ">
                                    
I got a free reading! It was decent and I was satisfied with it. There were many cards and I do think they read my energy right 😁 Very kind reader they really took the time to read for me! Though I still have to find out if the reading is true! ❤️
                                </p>
                                <div className="flex gap-2 ">
                                    <div className="w-7 h-7 text-center rounded-full text-white bg-purple-700">
                                        P
                                    </div>
                                    <span>Psychiatric_Coder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 max-w-sm bg-purple-200 text-black">
                        <div className="flex border rounded-lg h-full p-4 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="flex justify justify-between">
                                    <div className="flex p-1 gap-1 ">
                                        
                                          
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                        
                                       
                                            {/* <ion-icon key={i} name="star-outline"></ion-icon> */}
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <p className="leading-relaxed text-base  pb-10 ">
                                A very nice reading! It was clear and detailed. Clearly got saw my life in general. Some things are future events that still needs to be played out. Highly recommend this reader.
                                </p>
                                <div className="flex gap-2 ">
                                    <div className="w-7 h-7 text-center rounded-full text-white bg-purple-700">
                                        S
                                    </div>
                                    <span>Sea-Farm2490</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 max-w-sm bg-purple-200 text-black">
                        <div className="flex border rounded-lg h-full p-4 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="flex justify justify-between">
                                    <div className="flex p-1 gap-1 ">
                                        
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                        
                                       
                                            {/* <ion-icon key={i} name="star-outline"></ion-icon> */}
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <p className="leading-relaxed text-base  pb-10 ">
                                    
I got a free reading and I’m so excited to know more about my reading. Reader is very kind and apologetic that it took her longer than her initial plan to do the reading. Thank you so much reader!
                                </p>
                                <div className="flex gap-2 ">
                                    <div className="w-7 h-7 text-center rounded-full text-white bg-purple-700">
                                        L
                                    </div>
                                    <span>LastDetective179</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </Slider>
        </div>
        </div>);
}

export default Testimonials;
