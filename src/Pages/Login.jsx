import React from 'react'
import { useState } from 'react'
import { FaLock, FaUnlock } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const data = [
  {
    name: 'Email',
    placeholder: 'Email Address',
    type: 'text'
  },
  {
    name: 'Password',
    placeholder: 'Password',
    type: 'password'
  }
]
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');

  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <span className='text-white font-bold text-xl mt-10'>Access Your Account</span>
      <form onSubmit={handleSubmit} className='sm:w-5/12 w-11/12 p-2 flex flex-col justify-center items-center'>
        {
          data.map((item, index) => {
            return (
              <div className='w-full mt-4 relative' key={index}>
                <input required className='w-full p-3 mt-4 rounded outline-none' type={item.name === 'Password' && showPassword ? 'text' : item.type} name={item.name} placeholder={item.placeholder} />
                {item.placeholder === 'Password' ? showPassword ? <FaUnlock onClick={() => setShowPassword(!showPassword)} className='text-black text-lg cursor-pointer absolute right-0 p-4 rounded rounded-l-none  bg-violet-50 w-12 h-12 top-4' /> : <FaLock onClick={() => setShowPassword(!showPassword)} className='text-black text-lg cursor-pointer absolute right-0 p-4 rounded rounded-l-none  bg-violet-50 w-12 h-12 top-4' /> : null}
              </div>
            )
          })
        }
        <div className='w-full mt-12 flex justify-between items-center'>
          <button type='submit' className={`py-2 text-white px-6 rounded active:scale-95 bg-indigo-900 hover:bg-indigo-800 text-base`}>Login</button>
          <Link to='/register' className='py-2 text-black px-6 rounded active:scale-95 bg-white hover:bg-indigo-50 text-base'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;