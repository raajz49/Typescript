'use client'
import Link from 'next/link'
const Login = () => {
  return (
    <div className=''>
        <h1 className='flex  justify-center mt-36 font-serif font-bold mb-3 text-3xl'>Welcome to MCG</h1>
    <div className='flex flex-col item-center justify-center w-full max-w-sm mx-auto p-6 bg-gray-700 rounded-md shadow-md '>
        <div className='mb-4'>
            <h1 className='text-white  font-semibold text-2xl mb-4 '>Sign in to your account</h1>
      <label className='block mb-1 text-sm font-semibold text-white'>Email</label>
      <input
      type="email"
      name="email"
      placeholder='Enter your Email'
      className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
      />
      </div>

      <div>
        <label className='block text-sm font-semibold text-white'>Password</label>
        <input 
        type="password"
        name="password" 
        placeholder='Enter your password'
        className="w-full mb-4  px-4 py-2 text-gray-700 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
        />
      </div>

      <div className='flex mb-4 justify-between'>
        <label className='text-white flex items-center cursor-pointer'>
        <input 
        type="Checkbox" 
        />
        Remember Me
        </label>
      <p className='text-blue-500 hover:underline'>Forgot Password?</p>
      </div>

    <div className='mb-3' >
      
    <Link href="/components/"className='text-blue-400 underline'> 
      <button
        type="submit"
        className="w-full px-4 py-2 mb-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        // onClick={reloadPage}
        >
        Login
      </button>
      </Link>
      </div>

      <div className='flex'>
        <p className='text-white px-2'>Don't have an account?</p>
        <Link href={"/LoginPage/Register/"}className='text-blue-400 underline'> 
      Sign Up
      </Link>
      </div>
    </div>
    </div>
  )
}

export default Login
