import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../Components/VideoCard/VideoCard'
import { data } from './Data';

function ExploreVideo() {
    const { name } = useParams();
    const [explore, setExplore] = useState([]);

    useEffect(() => {
        let filter = data.filter(item => {
            return item.tag === name
        });
        setExplore(filter)
    }, [name])
    return (
        <div className='w-full py-5 px-4 flex justify-start items-start'>
            {explore.length > 0 ?
                <div className='w-full grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {explore.map((item, index) => (
                        <VideoCard key={`explore-${index}`} _id={item._id} img={item.img} channelIcon={item.channelIcon} title={item.title} channelName={item.channelName} />
                    ))}
                </div> : null}
        </div>
    )
}

export default ExploreVideo