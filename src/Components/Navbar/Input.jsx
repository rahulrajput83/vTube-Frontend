import React from 'react'
import { FaSearch } from 'react-icons/fa'


function Input() {

    const handleClick = () => {
        
    }
    return (
        <form className="sm:w-7/12 w-10/12 flex rounded justify-center items-center">
            <input type="text" className="w-full rounded rounded-r-none p-2 outline-none" placeholder="Search Video" />
            <FaSearch  onClick={handleClick}  className={`hover:bg-indigo-800 text-white rounded active:scale-95 rounded-l-none bg-indigo-900 h-full w-14 cursor-pointer px-5`} />
        </form>
    )
}

export default Input