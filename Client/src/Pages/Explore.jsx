import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu/Menu'
import education from '../Images/mortarboard.png'


const Items = [
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/trending_color_32.png',
        name: 'Trending',
        link: '/Trending'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/music_color_32.png',
        name: 'Music',
        link: '/Music'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/movies_color_32.png',
        name: 'Movies',
        link: '/Movies'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/sports_color_32.png',
        name: 'Sport',
        link: '/Sport'
    },
    {
        icon: education,
        name: 'Education',
        link: '/Education'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/gaming_color_32.png',
        name: 'Gaming',
        link: '/Gaming'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/news_color_32.png',
        name: 'News',
        link: '/News'
    },
    {
        icon: 'https://www.youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_32.png',
        name: 'Fashion & Beauty',
        link: '/Fashion_&_Beauty'
    }
]

function Explore() {
    return (
        <div className='w-full py-5 px-1 flex justify-start items-start'>
            <Menu />
            <div className='w-full grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {Items.map((item, index) => (
                    <Link to={`/explore${item.link}`} className='w-full flex flex-col justify-center items-center rounded px-3 text-stone-400 cursor-pointer' key={`explore-${index}`}>
                        <div className="flex w-full justify-start items-center">
                            <div className="px-6 flex flex-col py-4 justify-start items-center rounded-lg shadow-lg bg-white w-full">
                                <img src={item.icon} alt='' className='mb-4 w-[2rem] m-auto' />
                                <h5 className="text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-medium mb-2">{item.name}</h5>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </div>
    )
}

export default Explore