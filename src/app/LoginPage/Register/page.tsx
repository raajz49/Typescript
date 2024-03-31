
'use client'
import Links from '@/components/Links';
import Link from 'next/link'
import React, { useState } from 'react'
 

const Register = () => {
    const [showLinks, setShowLinks] = useState(false);
    const reloadPage=()=>{
        window.location.reload();
        // Show the Links component after reloading
        setShowLinks(true);
    }
  return (
    <div>
      <h1 className='flex  justify-center mt-36 font-serif font-bold mb-3 text-3xl'>Registration page</h1>
      <div  className='flex flex-col item-center justify-center w-full max-w-sm mx-auto p-6 bg-gray-700 rounded-md shadow-md '>
        <div className='mb-4'>
        <h1 className='text-white  font-semibold text-2xl mb-4 '>Register your account</h1>
        {/* <label className='block mb-1 text-sm font-semibold text-white'> Name</label> */}
      <input
      type="Name"
      name="Name"
      placeholder='Enter your Name'
      className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
      />
        </div>
        <div className='mb-4'>
      {/* <label className='block mb-1 text-sm font-semibold text-white'>Email</label> */}
      <input
      type="email"
      name="email"
      placeholder='Enter your Email'
      className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
      />
      </div>
      <div>
        <input 
        type="password"
        name="password" 
        placeholder='Enter your password'
        className="w-full mb-4  px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
        />
      </div>
      <div className='mb-3' >
      <button
        type="submit"
        className="w-full px-4 py-2 mb-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Register
      </button>
      {showLinks && <Links />}
      <div className='flex '> 
      <h1 className='px-2'>Already have an account?</h1>
      
      <Link href={"/LoginPage/Login/"}className='text-blue-400 underline'> 
      Sign in
      </Link>
      </div>
      </div>


      </div>
    </div>
  )
}

export default Register
