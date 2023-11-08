import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser, googleSingIn, updateimgName } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {

        e.preventDefault();
        // console.log(e.currentTarget);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email, password, photo, name);

        // Password Validation  : 
        // Check if the input has less than 6 characters
        if (password.length < 6) {
            return swal("Oops!!", "Total length of password should be at least 6 characters", "error");
        }

        // Check if the input contains at least one capital letter
        if (!/[A-Z]/.test(password)) {
            return swal("Oops!!", "Include at least one capital letter", "error");
        }

        // Check if the input contains any special characters
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            return swal("Oops!!", "Include at least one special character", "error");
        }

        // create user
        createUser(email, password)
            .then(res => {
                console.log(res);
                updateimgName(photo, name)
                    .then(res => {
                        console.log(res);
                        swal("Congratulations", "Sign Up Completed", "success");
                        navigate(location?.state ? location.state : '/');
                    })
                    .catch(err => {
                        console.log(err);
                    })
                console.log("Signed in successfully");
                // navigate after login 
                navigate(location?.state ? location.state : '/')
                // swal("Signed in!", "You Signed in Successfully!", "success");
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


    return (
        <div className=" mx-4">
            <div className="card bg-[#F0ECCF] flex-shrink-0 rounded-lg w-full max-w-2xl  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  text-black mx-16 pb-5">Please Sign Up </h1>
                <div className="card-body mx-8">
                    <form onSubmit={handleSignUp}>
                        <div className="flex justify-between gap-x-3 items-center">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered rounded-md" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="Enter your photo url" className="input input-bordered rounded-md" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-3 items-center">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-outline border-none   normal-case text-lg  bg-gray-300 font-bold w-full" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline normal-case text-lg font-bold bg-gray-300 w-full mt-2 mb-2 border-none text-black">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Continue with google
                    </button>
                    <div>
                        <h1 className="font-semibold text-base text-center mb-8 mt-2">Already Have An Account ? <Link to='/signIn' className="text-blue-700">Sign In</Link></h1>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};


export default SignUp; 