import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TypedText from "./TypedText";
function page() {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 relative h-screen">
          <img src="bg1.jpg" className="w-[100%] h-full" />
        </div>
        <div className="relative w-1/2 bg-gray-900 flex flex-col text-center justify-center items-center h-screen">
          <img
            src="logo.jpeg"
            className="rounded-full absolute top-4 right-4 w-[100px] h-[100px]"
            alt="Logo"
          />
          <p className="text-orange-500 text-3xl">OUR BELIEVE ----</p>
          <p className="text-white text-5xl m-10 font-bold">
            <TypedText
              strings={["SUPPLY QUALITY PRODUCTS IN A BEST PRICE."]}
              typeSpeed={100}
            />
          </p>
          <a href="/Home">
            <button className="text-white border-2 border-white p-5 pr-9">
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-6 inline ml-4"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="div2 flex">
        <div className="w-1/2 bg-orange-500 h-screen flex flex-col justify-center">
          <p className="text-white p-3 ml-7 text-2xl font-bold">OUR HISTORY</p>
          <hr className="text-white ml-7 mr-7"/>
          <p className="text-white p-3 ml-7 text-4xl font-bold">1998</p>
          <p className="text-white p-3 ml-7 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, animi!
          </p>
          <p className="text-white p-3 ml-7 text-3xl font-bold">ACHIEVEMENT</p>
          <hr className="text-white ml-7 mr-7"/>
          <p className="text-white p-3 ml-7 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, ipsam debitis! Modi nulla voluptates veniam inventore
            sit voluptatum, illo, eligendi minima tempore similique minus
            aliquid hic dolor soluta, vero sunt?
          </p>
        </div>
        <div className="w-1/2 h-screen">
          <img src="bg2.jpg" className="h-full w-[100%]" />
        </div>
      </div>
    </>
  );
}
export default page;
