import React from 'react'
import { Link } from 'react-router-dom'

function SignButt(props) {
  const handleChange = () => {
    props.setCollapsed(false);
  }
  return (
    <Link to='/login' onClick={handleChange} className={`w-10/12 active-scale-95 sm:w-fit py-2 mt-6 sm:mt-0 text-white px-6 rounded bg-indigo-900 hover:bg-indigo-800 text-base`}>Login</Link>
  )
}

export default SignButt