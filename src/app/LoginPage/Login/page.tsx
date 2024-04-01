"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const initialvalues: FormValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    const regexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if(!regexp.test(values.password)){
      errors.password = "Password must be 8 digit and contain #,@,$...";
    }

    return errors;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    // Check if there are no errors before redirecting
    if (Object.keys(errors).length === 0) {
      router.push('/'); // Redirect to home page on successful login
      console.log('Logged in successfully.');
    } else {
      console.log('Validation failed.');
    }
  };

  return (
    <div className=''>
      <h1 className='flex justify-center mt-36 font-serif font-bold mb-3 text-3xl'>Welcome to MCG</h1>
      <div className='flex flex-col item-center justify-center w-full max-w-sm mx-auto p-6 bg-gray-700 rounded-md shadow-md '>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <h1 className='text-white font-semibold text-2xl mb-4'>Sign in to your account</h1>
            <label className='block mb-1 text-sm font-semibold text-white'>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder='Enter your Email'
              className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
              required
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>

          <div>
            <label className='block text-sm font-semibold text-white'>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className="w-full mb-4 px-4 py-2 text-gray-700 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
              required
            />
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
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
            <button
              type="submit"
              className="w-full px-4 py-2 mb-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>

          <div className='flex'>
            <p className='text-white px-2'>Don't have an account?</p>
            <Link href="/LoginPage/Register/" className='text-blue-400 underline'> 
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
