import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaAngleUp, FaLock, FaTrash, FaUnlock } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'


const data = [
    {
        name: 'FullName',
        placeholder: 'Full Name',
        type: 'text'
    },
    {
        name: 'Email',
        placeholder: 'Email Address',
        type: 'email'
    },
    {
        name: 'Mobile',
        placeholder: 'Mobile Number',
        type: 'tel'
    },
    {
        name: 'Password',
        placeholder: 'Password',
        type: 'password'
    },
    {
        name: 'ConfirmPassword',
        placeholder: 'Confirm Password',
        type: 'passord'
    },

]
function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [showCountry, setShowCountry] = useState(false);
    const [register, setRegister] = useState({
        FullName: '',
        Email: '',
        Mobile: '',
        Country: '',
        Password: '',
        ConfirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register.Country === '') {
            setErrorMessage('Please select your country.');
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000)
        }
    }

    console.log(register);

    const handleInputError = () => {
        setErrorMessage('Please fill all required details.');
        setShowError(true);
        setTimeout(() => {
            setShowError(false)
        }, 3000)
    }

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json')
            .then(response => response.json())
            .then((response) => {
                setCountryList(response)
            })
    }, [])

    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <span className='text-white font-bold text-xl mt-10 capitalize'>Create Account</span>

            <form onSubmit={handleSubmit} className='sm:w-5/12 w-11/12 p-2 flex flex-col justify-center items-center'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='w-full mt-4 relative' key={index}>
                                <input onChange={handleChange} value={register[item.name]} onInvalid={handleInputError} required className={`w-full p-3 mt-4 placeholder:font-normal placeholder:text-gray-500 rounded outline-none ${item.placeholder === 'Password' ? 'pr-16' : ''}`} type={item.name === 'Password' && showPassword ? 'text' : item.type} name={item.name} placeholder={item.placeholder} />
                                {item.placeholder === 'Password' ? showPassword ? <FaUnlock onClick={() => setShowPassword(!showPassword)} className='text-black text-lg cursor-pointer absolute right-0 p-4 rounded rounded-l-none  bg-violet-50 w-12 h-12 top-4' /> : <FaLock onClick={() => setShowPassword(!showPassword)} className='text-black text-lg cursor-pointer absolute right-0 p-4 rounded rounded-l-none  bg-violet-50 w-12 h-12 top-4' /> : null}
                            </div>
                        )
                    })
                }
                <div onClick={() => setShowCountry(!showCountry)} className='w-full cursor-pointer bg-white relative p-3 mt-8 rounded flex justify-between items-center'>
                    {register.Country ? <span className='font-normal text-gray-500'>{register.Country}</span> : <span className='font-normal text-gray-500'>Select Country</span>}
                    {showCountry ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {showCountry ?
                    <div className='w-full ease-in-out duration-75 bg-white relative h-60 overflow-auto p-3 mt-1 rounded flex flex-col justify-between items-center'>
                        {
                            countryList.map((item, index) => {
                                return (
                                    <div onClick={() => { setRegister({ ...register, Country: item.name }); setShowCountry(!showCountry) }} className='w-full hover:bg-gray-200 py-1 cursor-pointer flex justify-start items-center' key={`Country-${index}`}>
                                        <img src={item.image} alt='' className='w-8 mx-4' />
                                        <span className='ml-4'>{item.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div> :
                    null}

                {showError ?
                    <div id="alert-1" className="flex ease-in-out my-8 justify-center items-center p-3 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div className="mx-4 text-sm font-medium text-blue-700 dark:text-blue-800">
                            {errorMessage}
                        </div>
                        <button onClick={() => setShowError(false)} type="button" className="mr-3 justify-center items-center bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
                            <FaTrash className='m-auto' />
                        </button>
                    </div>
                    :
                    null}

                <div className='w-full mb-12 mt-8 flex justify-between items-center'>
                    <button type='submit' className={`py-2 text-white px-6 rounded active:scale-95 bg-indigo-900 hover:bg-indigo-800 text-base`}>Register</button>
                    <Link to='/login' className='py-2 text-black px-6 rounded active:scale-95 bg-white hover:bg-indigo-50 text-base'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;