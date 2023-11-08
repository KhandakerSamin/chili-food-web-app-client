import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";

const SignIn = () => {

    const { signInUser, googleSingIn ,user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        signInUser(email, password)
            .then(res => {
                console.log(res);
                console.log("Sign in successfully");
                
                // navigate after login 
                navigate(location?.state ? location.state : '/')
                swal("Signed in!", "You Signed in Successfully!", "success");
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please give valid username or password !!',
                })
            })
    }

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(res => {
                console.log(res);
                // navigate after login 
                navigate(location?.state ? location.state : '/')
                // swal("Signed in!", "You Signed in Successfully!", "success");
                swal("Signed in!", "You Signed in Successfully!", "success");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const userInfo = {
        userName: user?.displayName, 
        userEmail: user?.email
    }
    const url = 'https://chili-food-server.vercel.app/users';
    axios.post(url, userInfo)
    .then(res => {
        console.log(res.data);
    })


    return (
        <div className=" mx-4">
            {/* <div className="mb-6 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div> */}
            <div className="card bg-[#F0ECCF] flex-shrink-0 rounded-lg w-full max-w-xl  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  text-black mx-16 pb-5">Sign In your account </h1>
                <div className="card-body mx-8">
                    <form onSubmit={handleSignIn} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-outline border-none   normal-case text-lg  bg-gray-300 font-bold w-full  " type="submit">Sign In</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline normal-case text-lg font-bold bg-gray-300 w-full mt-2 mb-2 border-none text-black">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Continue with google
                    </button>
                    <div>
                        <h1 className="font-semibold text-base text-black mt-2  text-center mb-8 ">Dont’t Have An Account ? Please <Link to='/signUp' className="text-blue-700">Sign Up</Link></h1>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};


export default SignIn;