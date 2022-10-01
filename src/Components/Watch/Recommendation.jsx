import React from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

function Recommendation(props) {
  const { item, index } = props;
  return (
    <Link to={`/watch/${item._id}/`} className='w-full mx-0 mt-1 bg-[#010102] cursor-pointer' key={index}>
      <img src={item.img} className='object-cover w-full' alt='' />
      <div className='w-full py-3 flex justify-start items-start mt-1 px-1'>
        <img src={item.channelIcon} alt='' className='rounded-full mr-3 w-9 bg-transparent' />
        <div className='w-full text-stone-400 flex flex-col justify-center'>
          <div className='text-sm'><ResponsiveEllipsis text={item.title} maxLine='2' ellipsis=' ...' /></div>
          <div className='text-xs mt-2 font-normal'>{item.channelName}</div>
        </div>
      </div>
    </Link>
  )
}

export default Recommendation