import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import About from '../Components/Channel/About';
import Menu from '../Components/Menu/Menu'
import { data } from './Data';


const menu = ['Home', 'Videos', 'Playlists', 'Community', 'Channels', 'About']


function Channel() {
    const { channelName } = useParams();
    const [channelData, setChannelData] = useState([])
    const [subscribed, setSubscribed] = useState(false);
    const [underline, setUnderline] = useState(0)

    useEffect(() => {
        let filter = data.filter(item => {
            return item.channelName === channelName
        });
        setChannelData(filter)
    }, [channelName])

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(!subscribed)
    }
    return (
        <div className='w-full py-5 overflow-hidden px-1 flex justify-start items-start'>
            <Menu />
            {channelData.length > 0 ?
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-col sm:flex-row sm:justify-between justify-center items-center sm:px-16'>
                        <div className='flex text-white font-medium flex-col sm:flex-row justify-center items-center'>
                            <img className='rounded-full border-4 sm:border-0 p-1 border-red-900 w-24' src={channelData[0].channelIcon} alt='' />
                            <div className='sm:px-4 py-4 sm:py-0 flex flex-col justify-center items-center sm:items-start'>
                                <span className='text-lg sm:text-xl'>{channelData[0].channelName}</span>
                                <span className='text-xs text-stone-400 font-medium flex'>
                                    <span>{channelData[0].subscriber >= 1000 ? `${parseFloat(channelData[0].subscriber / 1000).toFixed(1)}K` : channelData[0].subscriber} subscribers</span>
                                    <span className='mx-1'>•</span>
                                    <span className=''>{channelData.length} videos</span>
                                </span>
                            </div>
                        </div>
                        <button onClick={handleSubscribe} className={`px-4 text-white py-2 rounded text-sm ${subscribed ? 'bg-gray-900' : 'bg-indigo-900'} uppercase`}>{subscribed ? 'Subscribed' : 'subscribe'}</button>
                    </div>
                    <div className='scrollbar-hide bg-transparent overflow-auto my-8 flex py-4'>
                        {menu.map((item, index) => (
                            <div key={`menu-${index}`} onClick={() => setUnderline(index)} className={`w-fit items-center cursor-pointer flex flex-col text-white mx-0 sm:mx-4`}>
                                <span className='mb-1 text-center w-full'>{item}</span>
                                {index === underline ? <span className='h-[3px] w-32 bg-blue-900'></span> : <span className='w-32'></span>}
                            </div>
                        ))}
                    </div>
                    <About />
                </div>
                : null
}

        </div >
    )
}

export default Channel;