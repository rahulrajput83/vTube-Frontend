import React from 'react'

function Links(props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='flex w-fit justify-start items-center'>
        <img src={props.img} alt='' className='w-8 h-8' />
        <span className='text-stone-400 mx-4'>{props.title}</span>
    </a>
  )
}

export default Links