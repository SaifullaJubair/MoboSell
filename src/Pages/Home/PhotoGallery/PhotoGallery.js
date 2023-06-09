import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import { useEffect, useState } from "react";

// import home1 from "../../../assets/images/home-1.jpg";
// import home2 from "../../../assets/images/home-2.jpg";
// import home3 from "../../../assets/images/home-3.jpg";

const PhotoGallery = () => {
   const swiperSlideStyles = {
      width: "270px",
      height: "300px",
      overflow: "hidden",
      borderRadius: "5px",
   };

   const [loopTrigger, setLoopTrigger] = useState(false);
   const setSlidesLoop = () => {
      setLoopTrigger(window.innerWidth >= 1023 ? true : false);
   };

   useEffect(() => {
      // Initially set the amount of slides on page load
      setSlidesLoop();
      // Add the event listener on component mount
      window.addEventListener("resize", setSlidesLoop);
      // Remove the listener on unmount
      return () => {
         window.removeEventListener("resize", setSlidesLoop);
      };
   }, []);

   return (
      <div className="pt-14 pb-10 max-w-[1440px] w-[95%] mx-auto">

         <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Photo Gallery
         </h1>


         <Swiper
            loop={loopTrigger}
            effect={"coverflow"}
            slidesPerView={3}
            grabCursor={true}
            centeredSlides={false}
            coverflowEffect={{
               rotate: 20,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
            }}
         >
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/b3Gtc3Z/oppo-1.jpg' alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/3Wr7Vtv/Galaxy-Note-20-Ultra-S-Pen-on-back-scaled.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/zRxMSjs/1613709639309654.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/j5x6Fy2/mi-k20.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/wYn3cZh/samsung-s21.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/XL3CR8b/samsung-s21-ultra.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/26bpRBb/oppo4.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/bRhdfw0/realme-x3.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide style={swiperSlideStyles}>
               <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
                  <img
                     className="object-cover w-full h-full transition duration-300"
                     src='https://i.ibb.co/0MLXXbq/mi10-lite.jpg'
                     alt=""
                  />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default PhotoGallery;
