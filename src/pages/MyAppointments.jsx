import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SpecialityMenu from '../componets/SpecialityMenu';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointments</p>
      <div >
        {doctors.slice(0, 3).map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800">{item.name}</p>
              <p >{item.speciality}</p>
              <p className="text-zinc-700">Address:</p> 
              <p className="text-xs">{item.address.line1}</p>
              <p className="texr-xs">{item.address.line2}</p>

              <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date and Time :</span> 25 julay,2024 11 8:30pm</p> 
              <p className="">{item.name}</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border  hover:bg-red-600 hover:text-white transition-all duration-300">Cancel appoinment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
