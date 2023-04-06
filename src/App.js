import React, { useRef, useEffect } from "react";
import arrow from "./img/arrow.svg";
import { NavLink } from "react-router-dom";
import twiter from "./img/twiter.svg";
import insta from "./img/insta.svg";
import linkdin from "./img/linkdin.svg";
import advocate from "./img/advocate.svg";
import gaming from "./img/gaming.svg";
import stream from "./img/stream.svg";
import hand from "./img/hand.svg";
import lab from "./img/lab.svg";
import laptop from "./img/laptop.svg";
import kid from "./img/kid.svg";
import meditation from "./img/meditation.svg";
import yellow from "./img/yellow.svg";
import mechanics from "./img/mechanics.svg";
import robotics from "./img/robotics.svg";
import img from "./img/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useState } from "react";
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
function App() {
  // Swiper Code for the pagination, navigation, and autoplay
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  // Code for the Responsiveness of the Navbar
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);
  return (
    <>
      {/* Navbar For large screens */}
      <header>
        <nav className="hidden lg:block">
          <div className="w-full px-[55px] py-[10px] fixed z-[40] bg-[#08051F]">
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center justify-between w-[60%]">
                <div>
                  <img
                    src={img}
                    alt="logo"
                    className="h-[4.3rem] cursor-pointer"
                  />
                </div>
                <div className="flex flex-rox items-center justify-center gap-4 uppercase text-[rgba(255,255,255,0.5)]">
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      home
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      about us
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      archive
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      achievements
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      events
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-1 cursor-pointer select-none hover:text-white">
                      contact us
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-[10px_solid_white] text-white btn hover:text-black px-[24px] py-[10px] cursor-pointer z-10">
                <div className="uppercase">explore more</div>
              </div>
            </div>
          </div>
        </nav>
        {/* Responsive part of the navbar */}
        <nav className="lg:hidden block">
          <div className="w-full px-[20px] py-[10px] z-[40] bg-[#08051F]">
            <div className="flex justify-between items-center">
              <img src={img} alt="img/logo.svg" />
              <div
                onClick={onTriggerPopup}
                className="blob p-2 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <svg
                  class="w-[45px] h-[45px] sm:w-[40px] sm:h-[40px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <nav
          className={`fixed bg-[#08051F] w-[20rem] h-[20rem] bg-opacity-70 opacity-100 z-[100] backdrop-filter backdrop-blur-md rounded-lg text-white uppercase py-5 px-6 lg:hidden flex items-center justify-center transition-transform duration-500 ${
            popupState ? "showpopup" : "noshowpopup"
          }`}
        >
          <ul className=" flex items-start flex-col gap-3">
            <li>home</li>
            <li>about us</li>
            <li>archive</li>
            <li>achievements</li>
            <li>events</li>
            <li>contact us</li>
          </ul>
        </nav>
      </header>

      {/* Main Section or the section of the different parts like Landing page, Archive , Achievements, Events, and Contact Us Pages */}
      <section>
        {/* Horizontal Scroller for large screens */}
        <div>
          <div className="lg:flex relative lg:flex-row wrapper">
            {/* Landing Page */}
            <div className="child min-w-[100%] lg:mt-4 text-white lg:overflow-hidden lg:h-[97vh] flex justify-center flex-col items-center bg-[#08051F] lg:relative pt-10">
              <div className="flex flex-col w-full">
                <div className="flex flex-col gap-5 lg:my-[2.7rem] w-[90%] lg:w-auto mx-auto">
                  <h1 className="font-semibold uppercase lg:text-7xl text-5xl">
                    mechbots
                  </h1>
                  <h1 className="font-semibold uppercase lg:text-7xl text-5xl">
                    student chapter
                  </h1>
                  <div className="border-b border-b-[2px_solid_white] w-[15%]"></div>
                  <div className="flex gap-4 hover:gap-8 cursor-pointer transition ease-in-out duration-500">
                    <div className="uppercase ">learn more</div>
                    <img src={arrow} alt="" className="h-6" />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between w-[90%] mx-auto mt-10 lg:gap-0 gap-6">
                  <div className="w-[95%] flex">
                    <div className="flex flex-col gap-2 z-10 font-bold archive">
                      <img
                        src={twiter}
                        alt="twitter"
                        className="h-[1.25rem] social"
                      />
                      <img
                        src={insta}
                        alt="instagram"
                        className="h-[1.25rem] social"
                      />
                      <img
                        src={linkdin}
                        alt="linkedin"
                        className="h-[1.25rem] social"
                      />
                      <div className="border-l-[2px] h-[30px] border-l-[5px_solid_white] ml-[8px]"></div>
                    </div>
                    {/* Responsive Part for the Social Media icons of the Hero Page or Landing Page */}
                    <div className="flex flex-row gap-4 lg:mb-0 mb-8 lg:hidden">
                      <div className="border-t mt-[0.68rem] w-[30%] border-t-[1px_solid_white]"></div>
                      <div className="flex gap-2">
                        <img
                          src={linkdin}
                          alt="img/linkding.svg"
                          className=" social"
                        />
                        <img
                          src={insta}
                          alt="img/insta.svg"
                          className=" social"
                        />
                        <img
                          src={twiter}
                          alt="img/twiter.svg"
                          className=" social"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between lg:w-[65%] gap-5 z-10">
                    <div className="border-l-2 border-l-[2px_solid_white] "></div>
                    <div className="text-sm lg:text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam tenetur nesciunt, rerum saepe aliquid hic culpa
                      impedit adipisci enim, odio quae repellat voluptas
                      reprehenderit veniam assumenda expedita voluptatum
                      perferendis ex? Aliquam, laborum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-14rem] left-[-11rem] h-[339px] w-[339px] rounded-full bg-[#002EFF] shadow-[0px_0px_80px_80px_#002EFF] box-border lg:inline-block hidden"></div>
              <div className="absolute h-[100px] w-[100px] circle1 top-[13rem] left-[18rem] rounded-full lg:inline-block hidden"></div>
              <div className="absolute h-[100px] w-[100px] circle2 top-[13rem] right-[18rem] rounded-full lg:inline-block hidden"></div>
            </div>
            {/* Archive Page */}
            <div className="child flex bg-[#08051F] min-w-[100%] lg:overflow-hidden lg:relative pt-24">
              <div className="text-white uppercase flex lg:flex-row flex-col items-center justify-center mx-auto w-[90%] mt-[-2rem]">
                <div className="flex flex-col lg:w-[70%] gap-3 z-[1]">
                  <div className="flex flex-col justify-center items-start gap-4">
                    <h1 className="lg:text-6xl text-4xl">mechbots</h1>
                    <h1 className="lg:text-6xl text-4xl">student chapter</h1>
                    <h1 className="lg:text-6xl text-4xl">archive</h1>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="lg:text-3xl text-xl">
                      memories we all build together
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4 archive">
                  <div className="flex lg:flex-col gap-5">
                    <img src={advocate} alt="img/advocate.svg" className="img" />
                    <img src={kid} alt="img/kid.svg" className="img" />
                    <img src={stream} alt="img/stream.svg" className="img" />
                  </div>
                  <div className="flex lg:flex-col gap-6">
                    <img src={gaming} alt="img/gaming.svg" className="img" />
                    <img src={lab} alt="img/lab.svg" className="img" />
                  </div>
                  <div className="flex lg:flex-col gap-4">
                    <img src={laptop} alt="img/laptop.svg" className="img" />
                    <img src={hand} alt="ing/hand.svg" className="img" />
                  </div>
                </div>
                {/* Swiper Slide For the Responsive Part of the images of the Archive section */}
                <div className="flex flex-row items-center justify-center lg:hidden">
                  <div className="flex items-center justify-center w-screen p-2">
                    <Swiper
                      modules={[Navigation, Pagination, EffectFade, Autoplay]}
                      loop={true}
                      autoplay={{ delay: 2500 }}
                      breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        500: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={advocate}
                            alt="img/advocate.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={kid}
                            alt="img/kid.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={stream}
                            alt="img/stream.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={gaming}
                            alt="img/gaming.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={lab}
                            alt="img/lab.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={laptop}
                            alt="img/laptop.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center w-full h-full justify-center flex-col rounded-md border border-gray-500 p-4">
                          <img
                            src={hand}
                            alt="ing/hand.svg"
                            className="w-[20rem] h-[20rem]"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-14rem] left-[-11rem] h-[339px] w-[339px] rounded-full bg-[#002EFF] shadow-[0px_0px_80px_80px_#002EFF] box-border lg:inline-block hidden"></div>
              <div className="absolute circle6 w-[6rem] h-[6rem] rounded-full right-[4rem] bottom-[-4rem] lg:inline-block hidden"></div>
            </div>
            {/* Achievements Page */}
            <div className="child flex bg-[#08051F] lg:overflow-hidden min-w-[100%] pt-24 lg:relative">
              <div className="text-white uppercase flex lg:flex-row flex-col justify-center w-[90%] mx-auto">
                <div className="flex flex-col justify-center lg:w-[50%] gap-6">
                  <h1 className="lg:text-md text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <div className="flex flex-col gap-3">
                    <h1 className="lg:text-6xl text-5xl">mechbots clubs</h1>
                    <h1 className="lg:text-6xl text-5xl">achievements</h1>
                  </div>
                  <div className="flex flex-row gap-4 mb-4">
                    <div className="border-l border-l-[1px_solid_white]"></div>
                    <p className="lg:text-md text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sequi rem, minima molestias alias praesentium voluptates
                      impedit a in facere aspernatur fugit saepe excepturi
                      soluta ipsa esse similique possimus, cumque ratione
                      officia! Quod animi impedit commodi nostrum libero
                      consequatur.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 lg:mb-0 mb-8">
                    <div className="border-t mt-[0.68rem] w-[10%] border-t-[1px_solid_white]"></div>
                    <div className="flex gap-2">
                      <img
                        src={linkdin}
                        alt="img/linkding.svg"
                        className=" social"
                      />
                      <img
                        src={insta}
                        alt="img/insta.svg"
                        className=" social"
                      />
                      <img
                        src={twiter}
                        alt="img/twiter.svg"
                        className=" social"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[8%]"></div>
                <div className="lg:w-[45%] flex flex-col gap-4">
                  <div className="border-t border-t-[1px_solid_white]"></div>
                  <div className="flex flex-row gap-4">
                    <div className="border-l border-l-[1px_solid_white] lg:ml-[-1rem]"></div>
                    <div className="flex md:flex-row flex-col justify-center gap-4">
                      <div className="flex flex-col gap-8">
                        <img src={kid} alt="img/kid.svg" className="img" />
                        <div className="border btn border-[10px_solid_white] px-[24px] py-[10px] cursor-pointer mx-auto">
                          <button className=" uppercase lg:text-md text-xl">
                            ai always win
                          </button>
                        </div>
                        <img src={yellow} alt="img/yellow.svg" className="img" />
                      </div>
                      <div>
                        <img src={meditation} alt="img/meditation.svg" className="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[100px] w-[100px] circle1 top-[7rem] left-[-2rem] rounded-full lg:inline-block hidden"></div>
              <div className="absolute h-[100px] w-[100px] circle2 top-[34rem] left-[28rem] rounded-full lg:inline-block hidden"></div>
            </div>
            {/* Events Page */}
            <div className="child flex bg-[#08051F] lg:overflow-hidden min-w-[100%] pt-24 lg:relative">
              <div className="text-white uppercase flex lg:flex-row flex-col justify-center w-[90%] mx-auto">
                <div className="flex flex-col justify-center lg:w-[50%] gap-6">
                  <h1 className="lg:text-md text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <div className="flex flex-col gap-3">
                    <h1 className="lg:text-6xl text-5xl">robotics & ai</h1>
                    <h1 className="lg:text-6xl text-5xl">Workshops</h1>
                  </div>
                  <div className="flex flex-row gap-4 mb-4">
                    <div className="border-l border-l-[1px_solid_white] "></div>
                    <p className="lg:text-md text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sequi rem, minima molestias alias praesentium voluptates
                      impedit a in facere aspernatur fugit saepe excepturi
                      soluta ipsa esse similique possimus, cumque ratione
                      officia! Quod animi impedit commodi nostrum libero
                      consequatur.
                    </p>
                  </div>
                </div>
                <div className="w-[8%]"></div>
                <div className="lg:w-[45%] flex flex-col gap-4">
                  <div className="border-t border-t-[1px_solid_white]"></div>
                  <div className="flex flex-row gap-4">
                    <div className="border-l border-l-[1px_solid_white] lg:ml-[-1rem]"></div>
                    <div className="flex md:flex-row flex-col justify-center gap-4 z-10">
                      <div className="flex flex-col gap-8">
                        <img
                          src={advocate}
                          alt="img/kid.svg"
                          className="img"
                        />
                        <div className="border btn border-[10px_solid_white] px-[24px] py-[10px] cursor-pointer mx-auto">
                          <button className="uppercase lg:text-md text-xl">
                            upcoming events
                          </button>
                        </div>
                        <img
                          src={robotics}
                          alt="img/.svg"
                          className="img"
                        />
                      </div>
                      <div>
                        <img
                          src={mechanics}
                          alt="img/meditation.svg"
                          className="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-full absolute w-[5rem] h-[5rem] left-[-1rem] top-[8rem] circle4 z-[100] lg:inline-block hidden"></div>
              <div className="absolute circle6 w-[6rem] h-[6rem] rounded-full right-[4rem] bottom-[-2.7rem] lg:inline-block hidden"></div>
            </div>
            {/* Contact Us */}
            <div className="child bg-[#08051F] lg:min-w-[100%] w-full lg:overflow-hidden lg:relative lg:mt-20 mt-8">
              <div className="flex lg:flex-row flex-col justify-center items-center w-[90%] mx-auto text-white uppercase lg:pt-10">
                <div className="flex flex-col font-semibold gap-3 z-[1] lg:mb-0 mb-8">
                  <div className="flex flex-col gap-3">
                    <h1 className="lg:text-6xl text-5xl">mechbots</h1>
                    <h1 className="lg:text-6xl text-5xl">student chapter</h1>
                  </div>
                  <div>
                    <h1 className="lg:text-2xl text-xl">
                      we are here at your service!
                    </h1>
                  </div>
                </div>
                <div className="lg:w-[8%]"></div>
                <div className="lg:w-[35%] md:w-[80%] w-full lg:pl-10 pt-6 px-6 py-3 bg-form lg:mx-0 lg:mb-0 mb-8">
                  <form className="flex flex-col gap-3">
                    <label htmlFor="">name</label>
                    <input
                      type="text"
                      className="lg:w-[90%] bg-transparent border outline-none h-[50px] focus:bg-transparent"
                    />
                    <label htmlFor="">email address</label>
                    <input
                      type="email"
                      className="lg:w-[90%] bg-transparent border outline-none h-[50px] focus:bg-transparent"
                    />
                    <label htmlFor="">message</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      className="lg:w-[90%] bg-transparent border outline-none focus:bg-transparent mb-2"
                    ></textarea>
                    <div className="flex flex-col lg:w-[90%] justify-center items-center">
                      <button className="border btn py-[0.5rem] px-[3rem] uppercase">
                        send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="absolute bottom-[-14rem] left-[-11rem] h-[10rem] w-[10rem] rounded-full bg-[#002EFF] shadow-[0px_0px_40px_40px_#002EFF] box-border lg:inline-block hidden"></div>
              <div className="rounded-full absolute w-[5rem] h-[5rem] right-[31rem] bottom-[0.6rem] circle3 lg:inline-block hidden"></div>
              <div className="rounded-full absolute w-[5rem] h-[5rem] right-[1.45rem] top-[0rem] circle4 z-[100] lg:inline-block hidden"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Div */}
    </>
  );
}

export default App;
