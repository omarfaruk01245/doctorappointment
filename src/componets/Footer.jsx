import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        {/* Left Section */}

        <div>
          <img className="mt-5 w-40" src={assets.logo} />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only{" "}
          </p>
        </div>

        {/* Center Section */}

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col  gap-2 text-gray-600">
            <li>HOME</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TUCH</p>
          <ul className="flex flex-col  gap-2 text-gray-600">
            <li>+01675497066</li>
            <li>omarfaruk01245@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copy right text */}
      <div>
      <hr/>
        <p className="py-5 text-sm text-center">Copiright2024@faruk * All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
