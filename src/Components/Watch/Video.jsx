import React from 'react'
import ReactPlayer from 'react-player'
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useState } from 'react';
import CommentOption from './CommentOption';
import { Link } from 'react-router-dom';
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const comment = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '25 Dec 2020',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '24 Feb 2021',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '24 Sept 2021',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '23 Nov 2021',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '02 May 2022',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '10 July 2022',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        date: '20 Aug 2022',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    }, 
    {
        text: 'Test Comment',
        date: '24 Sept 2022',
        userName: 'vTube',
        userId: '54ef8ggr8ht51h8vd4g18g7',
        profileImg: 'https://yt3.ggpht.com/4PxMvFQL_cZRSXUwsh5eMSehl22GAejM2BY1Kix2gzrmeBOnaSzya45fFVh7I67yzmWWrWkQKQ=s88-c-k-c0x00ffffff-no-rj'
    }
]

const options = ['Oldest First', 'Newest First']

function Video(props) {
    const { video } = props;
    const [subscribed, setSubscribed] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [commentData, setCommentData] = useState(comment);
    const [option, setOption] = useState('Oldest First');

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
                    <Link to={`/c/${video[0].channelName}`} className='text-xs w-fit font-medium'>{video[0].channelName}</Link>
                    <div className='text-xs font-medium'>{video[0].subscriber >= 1000 ? `${parseFloat(video[0].subscriber / 1000).toFixed(1)}K` : video[0].subscriber}
                        <span className='ml-2'>subscribers</span>
                    </div>
                </div>
                <button onClick={handleSubscribe} className={`px-4 py-2 rounded text-sm ${subscribed ? 'bg-gray-900' : 'bg-indigo-900'} uppercase`}>{subscribed ? 'Subscribed' : 'subscribe'}</button>
            </div>
            <div className='w-full flex mt-4 flex-col' >
                <div className='py-1 px-3 border text-sm border-stone-50 flex justify-between items-center'>
                    <span>Comments {comment.length}</span>
                    <CommentOption setCommentData={setCommentData} comment={comment} options={options} setOption={setOption} option={option} />
                </div>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className='w-full py-3 flex justify-start items-start mt-1 px-1'>
                            <img src={item.profileImg} alt='' className='rounded-full mr-3 w-9 bg-transparent' />
                            <div className='w-full font-light text-sm text-stone-400 flex flex-col justify-center'>
                                <div className='mt-2 flex'>
                                    <span>{item.userName}</span>
                                    <span className='mx-4'>{item.date}</span>
                                </div>
                                <div className=''>{item.text}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Video;