import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPinAlt } from '@iconscout/react-unicons'

function Inputs() {
  return (

  <div className="flex flex-row justify-center my-6 ">
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text"
        placeholder='Type city...'
        className='text-xl font-light p-2 focus:outline-none capitalize placeholder:lowercase'/>

        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        <UilLocationPinAlt size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
    </div>

    <div className="flex flex-row w-1/4 items-center justify-center">
        <button name='metric' className='text-white font-light'>°C</button>
        <p className=' text-xl text-white mx-1'> or </p>
        <button name='imperial' className='text-white font-light'>°F</button>
    </div>
  </div>
  )
}

export default Inputs