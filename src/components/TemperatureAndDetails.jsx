import React from "react";
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear,UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return <div>
    <div className=" flex justify-center items-center py-6 text-xl text-cyan-300">
        <p>Cloudy or who knows</p>
    </div>

    <div className=" flex items-center justify-between text-white py-3">
        <img src="" alt="" />
    </div>
    <div className="flex flex-row items-center justify-between text-white py-3">
      <UilSun size={85} className=' text-yellow-500 '/>
      <p className=" text-5xl">34°</p>
      <div className=" flex flex-col space-y-2">
        
        <div className=" flex font-light text-sm items-center justify-center">
          <UilTemperature size={18} className="mr-1"/>
          Real fell:
          <span className=" font-medium ml-1">32°</span>
        </div>
        <div className=" flex font-light text-sm items-center justify-center">
          <UilTear size={18} className="mr-1"/>
          Humidity:
          <span className=" font-medium ml-1">65%</span>
        </div>
        <div className=" flex font-light text-sm items-center justify-center">
          <UilWind size={18} className="mr-1"/>
          Wind speed:
          <span className=" font-medium ml-1">11 km/h</span>
        </div>

      </div>

    </div>
    <div className=" flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
      <UilSun />
      <p className=" font-light">Rise: <span className=" font-medium ml-1"></span>06:45 AM</p>
      <p className=" font-light">|</p>
      <UilSunset />
      <p className=" font-light">Set: <span className=" font-medium ml-1"></span>07:45 PM</p>
      <p className=" font-light">|</p>
       <UilArrowUp/>
      <p className=" font-light">Max: <span className=" font-medium ml-1"></span>45°</p>
      <p className=" font-light">|</p>
       <UilArrowDown/>
      <p className=" font-light">Min: <span className=" font-medium ml-1">40°</span></p>
    </div>

  </div>;
}

export default TemperatureAndDetails;
