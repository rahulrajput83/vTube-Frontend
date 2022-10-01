import React from 'react'
import DetailText from './DetailText'
import HeadingText from './HeadingText'
import { IoInformationCircleOutline, IoAnalyticsSharp } from "react-icons/io5";
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import website from '../../Images/web.png'
import Links from './Links';



function About() {
  return (
    <div className='w-full grid px-4 sm:px-0 gap-x-0 sm:gap-x-16 gap-y-6 grid-cols-1 sm:grid-cols-3 justify-center items-start'>
      <div className='col-span-2 flex flex-col'>
        <HeadingText text='Description' />
        <DetailText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        <HeadingText text='Links' />
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
          <Links title='Facebook' link='https://fb.com' img={facebook} />
          <Links title='Instagram' link='https://instagram.com' img={instagram} />
          <Links title='Twitter' link='https://twitter.com' img={twitter} />
          <Links title='Website' link='https://rahulrajput83-portfolio.vercel.app/' img={website} />
        </div>
      </div>
      <div className='flex flex-col'>
        <HeadingText text='Stats' />
        <div className='flex justify-start'>
          <IoInformationCircleOutline className='text-stone-400 mr-2 text-lg' />
          <DetailText text='Joined 20 May 2022' />
        </div>
        <div className='flex justify-start'>
          <IoAnalyticsSharp className='text-stone-400 mr-2 text-lg' />
          <DetailText text='1000526549 views' />
        </div>
      </div>
    </div >
  )
}

export default About