import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data';
import { useState } from 'react';
import Video from '../Components/Watch/Video';
import Recommendation from '../Components/Watch/Recommendation';



function Watch() {
  const { id } = useParams();
  const [video, setVideo] = useState([])

  useEffect(() => {
    let filter = data.filter(item => {
      return item._id === id
    });
    setVideo(filter)
  }, [id])


  return (
    <div className='w-full p-1 sm:p-6 text-white grid gap-y-6 grid-cols-1 sm:grid-cols-3 justify-center items-start'>
      <div className='col-span-2 mx-0 my-1 md:mx-4 flex flex-col h-fit'>
        {video.length > 0 ?
          <Video video={video} /> : <span>Err</span>}
      </div>
      <div className='flex flex-col mx-auto justify-center items-start'>
        {data.map((item, index) => (
          <Recommendation key={index} item={item} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default Watch