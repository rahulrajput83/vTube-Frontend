import React from 'react';
import {FaHome, FaCompass} from 'react-icons/fa'

const MenuData = [
    {
        icon: FaHome,
        name: 'Home   '
    },
    {
        icon: FaCompass,
        name: 'Explore',
    },
]

function Menu() {
  return (
    <div className='hidden sm:flex w-fit sm:mx-4 md:mx-8'>
        <div className='w-full flex flex-col justify-start items-start'>
            {
                MenuData.map((data, index) => (
                    <div key={`menu_${index}`} className='w-full font-medium mt-8 hover:text-white cursor-pointer text-[#606063] text-sm grid grid-cols-1'>
                        <data.icon className='text-xl mx-auto' />
                        <div className='mx-auto'>{data.name}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Menu