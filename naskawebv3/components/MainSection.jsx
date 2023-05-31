import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Parallax, Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import p1 from "../public/images/content1.png"
import lx from "../public/images/garisbirumobile.png"
import ly from "../public/images/gariskuning.png"
import lo from "../public/images/gariskuningv2.png"
import lbv2 from "../public/images/garisbiru.png"

function AboutUs(){
  return(
    <div id="mainsec" className="   bg-[url('/images/bgmobile1.png')] md:bg-[url('/images/content1.png')]  h-screen w-full bg-center bg-no-repeat bg-cover">
      <div className="w-full h-full mx-auto flex justify-center items-center lg:mt-32  lg:mx-20 ">

          <div className="lg:flex lg:max-w-9xl ">
            <div className="text-left ml-14 text-[#2F5597] font-body md:ml-16 lg:mt-32 ">
              <h1 className="text-5xl lg:ml-10 lg:text-6xl lg:mt-20">About <span className="lg:hidden">Us</span></h1>
              <div className='font-bold text-left lg:ml-10 lg:text-6xl text-[#2F5597] text-6xl lg:-mr-14 hidden lg:block'> Us</div>
            </div>
            <div className="ml-14 mt-3 mb-2 w-64 md:ml-16 lg:hidden">
              <Image src={lx}  className="h-2"/>
            </div>
            <div className="ml-10 h-36 hidden lg:block lg:mt-36 lg:max-h-9xl">
            <div className="testline hidden lg:block mx-36 mr-20 xl:min-h-fit"></div>
            </div>
            <div className="text-justify mx-10 p-3 font-body tracking-wider leading-9 md:mx-12 lg:mt-20  lg:mr-5 lg:-ml-14 lg:max-h-sm xl:mt-36">
            <div className="hidden lg:block ">
                <h3 className="text-3xl font-company mb-2 lg:max-w-2xl lg:min-w-3xl">PT NASKA JALA DEWA</h3>
            </div>
              <p className="text-xl lg:text-2xl lg:min-w-sm lg:mr-36 md:leading-loose font-body xl:w-[100vh]">Founded by experience Business Consultant and IT practitioner, who has great vision to Inspiring and supporting business continuously with creative and intelligent use of latest and suitable technology, environmentally friendly. Complete, quality, accurate, fastest, customizable and reliable.</p>
            </div>
          </div>
      </div>
    </div>
  )
}
function Mission(){
  return(
    // sm:bg-red-500 md:bg-green-600 lg:bg-yellow-700 xl:bg-purple-100
    // 
    <div className="bg-[url('/images/content2.png')] h-screen w-full bg-center bg-no-repeat bg-cover">
      <div className="w-full h-full  flex justify-center items-center mr-20">

          <div className="md:ml-14 lg:mx-20 ">
            <div className="text-5xl lg:text-6xl text-left ml-14 text-[#BF9000]  font-body">
              <h1>Mission</h1>
              <h1>Statement</h1>
            </div>
            <div className="ml-14 mt-3 mb-2 w-52 sm:w-64 md:w-80 md:ml-16 ">
              <Image src={ly}  className="h-2"/>
            </div>
            <div className="text-xl lg:text-2xl text-justify mx-10 p-3 font-body md:leading-loose  md:mr-20 lg:mr-20 xl:mt-4 xl:w-[100vh]">
              <p>Assist companies by providing solutions to problems in business processes and simplifying business processes by utilizing information technology and internet facilities that will result in increased efficiency, productivity, and digital transformation presence for your business and internet facilities that will result in increase efficiency, productivity, and a digital presence for your business.
</p>
            </div>
          </div>
</div>
    </div>
  )
}
function BusinessGoal(){
  return(
    // 
    <div className=" bg-[url('/images/content3.png')] h-screen w-full bg-center bg-no-repeat bg-cover">
      <div className="w-full h-full  flex justify-center items-center mr-20">

          <div className="md:ml-14 lg:mx-20">
          <div className="ml-14 mt-3 mb-2 w-44 sm:w-64 md:w-80  md:ml-[57px] lg:ml-[58px] xl:ml-[58px] ">
              <Image src={lo}  className="h-2"/>
            </div>
            <div className="text-5xl lg:text-6xl text-left ml-14 font-body xl:mb-3 text-[#C55A11]">
              <h1>Business</h1>
              <h1>Goal</h1>
            </div>
            <div className="text-xl lg:text-2xl text-justify mx-10 p-3 font-body md:leading-loose md:mr-20 lg:mr-36  xl:w-[100vh]">
              <p>NASKA engaged in system consulting and software applications, especially web and  mobile applications that can be tailored to your business  needs, engage with world class cloud provider as well as deliver application migration, training and managed services.
</p>
            </div>
          </div>
</div>
    </div>
  )
}

function inovasi(){
  return(
    <div className="   bg-[url('/images/content4.png')]  h-screen w-full bg-center bg-no-repeat bg-cover">
    <div className="w-full h-full mx-auto flex justify-center items-center lg:mx-20 ">

    <div className="md:ml-14 lg:flex lg:max-w-9xl xl:mb-20 ">
            <div className="text-left ml-14 text-[#2F5597] font-body md:ml-16 lg:mt-28 ">
              <h1 className="text-5xl lg:ml-10 lg:text-6xl lg:mt-20">Our</h1>
              <h1 className="text-5xl lg:ml-10 lg:text-6xl lg:mt-20 lg:hidden">Philosophy</h1>
              <div className='font-bold text-left lg:ml-10 lg:text-6xl text-[#2F5597] text-6xl  hidden lg:block'> Philosophy</div>
            </div>
            <div className="ml-14 mt-5 mb-2 w-[270px] md:w-[280px] md:ml-16 lg:hidden">
              <Image src={lx}  className="h-2"/>
            </div>
            <div className="ml-10 h-36 hidden lg:block lg:mt-36 lg:max-h-9xl">
            <div className="testlinee hidden lg:block mx-36 mr-20 xl:min-h-fit"></div>
            </div>
            <div className="text-justify mx-10 p-3 font-body tracking-wider leading-9 lg:mt-40 md:mx-12 lg:mr-5 lg:-ml-14 lg:max-h-sm xl:mt-44">
            <div className="hidden lg:block ">
                <h3 className="text-4xl font-body  mb-2 lg:max-w-2xl lg:min-w-3xl text-[#2F5597]">Innovation & Services</h3>
            </div>
              <p className="text-xl lg:text-2xl lg:min-w-sm lg:mr-36 md:leading-loose font-body xl:w-[100vh]"> We focus on delighting our customers by delivering innovation and the highest quality of services. </p>
            </div>
          </div>
      </div>
  </div>
  )
}

function Innovation(){
  return(
    <div className=" bg-[url('/images/content4.png')] h-screen w-full bg-center bg-no-repeat bg-cover">
      <div className="w-full h-full mx-auto flex justify-center items-center">

          <div className="">
            <div className="text-5xl lg:text-6xl text-left ml-14 font-body text-[#2F5597]">
              <h1>Our</h1>
              <h1>Philosophy</h1>
            </div>
            <div className="ml-14 mt-3 mb-2">
              <Image src={lx} height="5" className="w-52 sm:w-64 md:w-80" />
            </div>
            <div className="text-left ml-14 text-2xl text-[#2F5597]">
              <h4>Innovation & Services</h4>
            </div>
            <div className="text-xl lg:text-2xl text-justify mx-10 p-3 font-body md:leading-loose md:mr-20 lg:mr-36  xl:w-[100vh]">
              <p>Founded by experience Business Consultant and IT practitioner, who has great vision to Inspiring and supporting business continuously with creative and intelligent use of latest and suitable technology, environmentally friendly. Complete, quality, accurate, fastest, customizable and reliable.</p>
            </div>
          </div>
</div>
    </div>
  )
}


const MainSection = () => {
  return (
    <div className="h-screen " id="mainsection">
     <Swiper
    //  autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }}
    speed={1500}
        parallax={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>{AboutUs()}</SwiperSlide>
        <SwiperSlide>{Mission()}</SwiperSlide>
        <SwiperSlide>{BusinessGoal()}</SwiperSlide>
        <SwiperSlide>{inovasi()}</SwiperSlide>

      </Swiper>
    </div>
  )
}

export default MainSection