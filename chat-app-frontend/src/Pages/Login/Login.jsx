import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
    const { login, loading } = useLogin()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(userName, password)

    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>ChatApp</span></h1>

                <form onSubmit={handleSubmit} >

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input onChange={e => setUserName(e.target.value)} value={userName} type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>

                    <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</Link>

                    <div>
                        <button type="submit" className='btn btn-block btn-sm mt-2'>{loading ? <span className="loading loading-ring loading-xs"></span> : "Login"}</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Login;






// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//             <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>ChatApp</span></h1>

//                 <form >

//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label '>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <a href="" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>

//                 </form>

//             </div>

//         </div>
//     );
// };

// export default Login;