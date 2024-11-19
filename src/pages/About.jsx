import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div >
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-gray-700 font-medium">
          ABOUT <span>US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia
          </p>
          <b className="text-gray-800">Our Vision</b>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Effiencency</b>
          <p>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Convencies</b>
          <p>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Personilazation</b>
          <p>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d</p>
        </div>
      </div>
    </div>
  );
};

export default About;
