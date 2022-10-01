import React from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

function VideoCard(props) {
    const {data, index } = props;
    return (
        <Link to={`/watch/${data._id}`} className='w-full bg-[#010102] cursor-pointer mx-0 mt-1' key={index}>
            <img src={data.img} className='object-cover w-full' alt='' />
            <div className='w-full py-3 flex justify-start items-start mt-1 px-1'>
                <img src={data.channelIcon} alt='' className='rounded-full mr-3 w-9 bg-transparent' />
                <div className='w-full text-stone-400 flex flex-col justify-center'>
                    <div className='text-sm'><ResponsiveEllipsis text={data.title} maxLine='2' ellipsis=' ...' /></div>
                    <div className='text-xs mt-2 font-normal'>{data.channelName}</div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard