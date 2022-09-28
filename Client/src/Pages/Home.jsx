import React from 'react';
import {data} from './Data';
import Menu from '../Components/Menu/Menu'
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Link } from 'react-router-dom';
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);


function Home() {

  return (
    <div className='w-full py-5 px-1 flex justify-start items-start'>
        <Menu />
        <div className='w-full grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((item, index) => (
                <Link to={`/watch/${item._id}`} className='w-full bg-[#010102] cursor-pointer' key={index}>
                    <img src={item.img} className='object-cover w-full' alt='' />
                    <div className='w-full py-3 flex justify-start items-start mt-1 px-1'>
                        <img src={item.channelIcon} alt='' className='rounded-full mr-3 w-9 bg-transparent' />
                        <div className='w-full text-stone-400 flex flex-col justify-center'>
                            <div className='text-sm'><ResponsiveEllipsis text={item.title} maxLine='2' ellipsis=' ...' /></div>
                            <div className='text-xs mt-2 font-normal'>{item.channelName}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home;