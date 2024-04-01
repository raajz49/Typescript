"use client"

import Link from 'next/link'
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
interface FormValues {
  Name: string;
  email: string;
  password: string;
  Confirmpassword: string;
}

const Register = () => {
  const router = useRouter();
  const initialvalues: FormValues = { Name: "", email: "", password: "", Confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    // Check if there are no errors before redirecting
    if (Object.keys(errors).length === 0) {
      router.push('/LoginPage/Login');
    }
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex1 = /^[A-Za-z][A-Za-z0-9_]{2,29}$/;
    const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!values.Name) {
      errors.Name = "Username is required";
    } else if (!regex1.test(values.Name)) {
      errors.Name = "Username must be longer and start with alphabets";
    }

    if (!regex.test(values.email)) {
      errors.email = "Valid email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (!regexp.test(values.password)) {
      errors.password = "Password must be 8 characters and contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if (!values.Confirmpassword) {
      errors.Confirmpassword = "Confirm Password is required";
    } else if (values.Confirmpassword !== values.password) {
      errors.Confirmpassword = "Passwords do not match";
    }

    return errors;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1 className='flex justify-center mt-36 font-serif font-bold mb-3 text-3xl'>Registration page</h1>
      <div className='flex flex-col item-center justify-center w-full max-w-sm mx-auto p-6 bg-gray-700 rounded-md shadow-md '>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type="text"
              name="Name"
              value={formValues.Name}
              placeholder='Enter your Name'
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
            />
            {formErrors.Name && <p className="text-red-500">{formErrors.Name}</p>}
          </div>
          <div className='mb-4'>
            <input
              type="email"
              name="email"
              value={formValues.email}
              placeholder='Enter your Email'
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>
          <div className='mb-4'>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                placeholder='Enter your password'
                onChange={handleChange}
                className="w-full mb-1 px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black "
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          </div>
          <div className='mb-4'>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Confirmpassword"
              value={formValues.Confirmpassword}
              placeholder='Confirm password'
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 text-gray-700 bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:bg-gray-500 focus:border-blue-500"
            />
            <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black "
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            {formErrors.Confirmpassword && <p className="text-red-500">{formErrors.Confirmpassword}</p>}
          </div>
          <div className='mb-3' >
            <button
              type="submit"
              className="w-full px-4 py-2 mb-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Register
            </button>
            <div className='flex'>
              <h1 className='px-2'>Already have an account?</h1>
              <Link href="/LoginPage/Login/" className='text-blue-400 underline'>
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;