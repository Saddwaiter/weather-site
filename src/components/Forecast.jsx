import React from 'react'
import { UilSun } from '@iconscout/react-unicons';
function Forecast({title}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className=" text-white font-medium uppercase ">{title}</p>
        </div>
        <hr className="my-2" />
<div className=" flex flex-row items-center justify-between text-white">

    <div className=" flex flex-col items-center justify-center">
        <p className=" font-light text-sm">
            4:30 AM
        </p>
        <UilSun size={50} className=" text-yellow-300" />
        <p className=" font-medium ">22°</p>
    </div>
        
    <div className=" flex flex-col items-center justify-center">
        <p className=" font-light text-sm">
            4:30 AM
        </p>
        <UilSun size={50} className=" text-yellow-300" />
        <p className=" font-medium ">22°</p>
    </div>    
    <div className=" flex flex-col items-center justify-center">
        <p className=" font-light text-sm">
            4:30 AM
        </p>
        <UilSun size={50} className=" text-yellow-300" />
        <p className=" font-medium ">22°</p>
    </div>    
    <div className=" flex flex-col items-center justify-center">
        <p className=" font-light text-sm">
            4:30 AM
        </p>
        <UilSun size={50} className=" text-yellow-300" />
        <p className=" font-medium ">22°</p>
    </div>    
    <div className=" flex flex-col items-center justify-center">
        <p className=" font-light text-sm">
            4:30 AM
        </p>
        <UilSun size={50} className=" text-yellow-300" />
        <p className=" font-medium ">22°</p>
    </div>
</div>
    </div>

    )
}

export default Forecast