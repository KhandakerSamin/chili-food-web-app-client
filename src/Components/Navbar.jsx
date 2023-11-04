import { Link, NavLink } from "react-router-dom";
import logo from './../assets/img/logo-2.png'
import swal from "sweetalert";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const navLinks = <>
        <li className='text-base font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/allFoods'>All Food Items</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/blog'>Blog</NavLink></li>
        {/* {user && <li className='text-lg font-bold'><NavLink to="/addProduct">Add Product</NavLink></li>}
        {user && <li className='text-lg font-bold'><NavLink to="/cart">My Cart</NavLink></li>} */}
    </>

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
        swal("Signed Out!", "Signed Out Successfully!", "success");
        console.log("signed OUt");
    }

    return (
        <div className="navbar bg-red-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-x-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className=''>
                    <img className='h-20 md:ml-10 w-full' src={logo} alt="" />
                </div>            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-x-4 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-10 flex justify-center items-center'>

                    <div className='flex justify-center items-center'>
                        <div className="dropdown">
                            <label tabIndex={0} className="">
                                {user ?
                                    <img className='rounded-full w-[35px] md:w-[40px] h-[35px] md:h-[40px] mr-5' src={user.photoURL} alt='' />
                                    :
                                    // <img className='w-10 h-10 rounded-full mr-4' src={img} alt="" />
                                    <></>
                                }
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-10 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a> My added food items</a></li>
                                <li><a>Add a food item
                                </a></li>
                                <li><a>My ordered food items</a></li>
                            </ul>
                        </div>

                    </div>

                    <button onClick={toggleTheme} className=" mx-4  normal-case">
                        {theme === "light" ? <MdDarkMode className='text-3xl mt-1'></MdDarkMode> : <MdLightMode className='text-3xl mt-1'></MdLightMode>}
                    </button>

                    <div>
                        {
                            user ? (
                                <Link to='/'><button onClick={handleSignOut} className='text-lg font-bold text-black'>Sign Out</button></Link>
                            ) : (
                                <Link to='/signIn'><button className='text-lg font-bold text-black'>SignIn</button></Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;