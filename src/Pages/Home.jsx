import React from 'react';
import {data} from './Data';
import Menu from '../Components/Menu/Menu'
import VideoCard from '../Components/VideoCard/VideoCard';



function Home() {

  return (
    <div className='w-full py-5 px-1 flex justify-start items-start'>
        <Menu />
        <div className='w-full grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((item, index) => (
                <VideoCard key={`home-${index}`} _id={item._id} img={item.img} channelIcon={item.channelIcon} title={item.title} channelName={item.channelName} />
            ))}
        </div>
    </div>
  )
}

export default Home;