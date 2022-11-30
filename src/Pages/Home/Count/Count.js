import React from 'react';
import CountUp from 'react-countup';
const Count = () => {
   return (
      <div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
               <div className="text-center md:border-r"
                  data-aos="zoom-in-up"
                  data-aos-duration='1000'
                  data-aos-anchor-placement="center-bottom">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                     <CountUp delay={2} end={144} />K</h6>

                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                     Downloads
                  </p>
               </div>
               <div className="text-center md:border-r"
                  data-aos="zoom-in-up"
                  data-aos-duration='1400'
                  data-aos-anchor-placement="center-bottom">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                     <CountUp delay={2} end={22} />K</h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                     Subscribers
                  </p>
               </div>
               <div className="text-center md:border-r"
                  data-aos="zoom-in-up"
                  data-aos-duration='1800'
                  data-aos-anchor-placement="center-bottom">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp delay={2} end={40} />K</h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                     Users
                  </p>
               </div>
               <div className="text-center"
                  data-aos="zoom-in-up"
                  data-aos-duration='2400'
                  data-aos-anchor-placement="center-bottom">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp delay={2} end={68} />K</h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                     Cookies
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Count;