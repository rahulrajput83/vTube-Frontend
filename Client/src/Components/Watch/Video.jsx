import React from 'react'
import ReactPlayer from 'react-player'
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useState } from 'react';
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);



function Video(props) {
    const { video } = props;
    const [subscribed, setSubscribed] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(!subscribed)
    }
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full h-52 md:h-96 flex flex-col'>
                <ReactPlayer width='100%' height='100%'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                />
            </div>
            <div className='text-base mt-4 mx-2 md:mx-0'>
                <span>{video[0].title}</span>
            </div>
            <div className='text-sm mb-4 cursor-pointer text-stone-400 mt-2 mx-2 md:mx-0'>
                <ResponsiveEllipsis onClick={() => setShowMore(!showMore)} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} maxLine={!showMore ? '2' : '10000'} ellipsis='  ...more' />
            </div>
            <div className='w-full py-3 flex justify-center items-center mt-1 px-1'>
                <img src={video[0].channelIcon} alt='' className='rounded-full mr-3 w-9 bg-transparent' />
                <div className='w-full text-stone-400 flex flex-col justify-center'>
                    <div className='text-xs font-medium'>{video[0].channelName}</div>
                    <div className='text-xs font-medium'>{video[0].subscriber >= 1000 ? `${parseFloat(video[0].subscriber / 1000).toFixed(1)}K` : video[0].subscriber}
                        <span className='ml-2'>subscribers</span>
                    </div>
                </div>
                <button onClick={handleSubscribe} className='px-4 py-2 rounded text-sm bg-indigo-900 hover:bg-indigo-800 uppercase'>{subscribed ? 'Subscribed' : 'subscribe'}</button>
            </div>
            <div className='w-full flex mt-4 flex-col' >
                <div className='p-3 border text-sm border-stone-50 flex justify-between'>
                    <span>Comments</span>
                    <span className='cursor-pointer'>Newest First</span>
                </div>
            </div>
        </div>
    )
}

export default Video;