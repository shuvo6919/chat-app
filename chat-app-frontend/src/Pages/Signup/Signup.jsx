import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../Hooks/useSignup';

const Signup = () => {
    const { loading, signup } = useSignup()
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(inputs)

    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-500'>ChatApp</span></h1>

                <form onSubmit={handleSubmit}>


                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} value={inputs.fullName} type="text" placeholder='Enter full name' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} value={inputs.userName} type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password} type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} value={inputs.confirmPassword} type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    <GenderCheckbox handleGenderChange={handleGenderChange} selectedGender={inputs.gender}></GenderCheckbox>

                    <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {
                                loading ? <span className="loading loading-ring loading-xs"></span>

                                    : "Sign Up"
                            }
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Signup;