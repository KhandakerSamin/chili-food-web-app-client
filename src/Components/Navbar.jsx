/* eslint-disable react/no-unknown-property */
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
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-x-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className=''>
                    <img className='h-20 md:ml-10 w-full' src={logo} alt="" />
                </div>            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-x-2 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=' flex justify-center items-center'>


                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button ">
                                {user ?
                                    <img className='rounded-full w-[35px] md:w-[40px] h-[35px]  md:h-[40px] ' src={user.photoURL} alt='' />
                                    : <></>
                                }
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 space-y-3 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li className="text-xl font-bold"> <img className='h-24 w-28 rounded-full' src={user?.photoURL} alt='Profile I' /></li>
                                <li className="text-xl font-bold">{user?.displayName}</li>
                                <NavLink to='/myAddedFood'><li><a className="text-base md:text-lg font-normal md:font-bold">👉 My added  food items</a></li></NavLink>
                                <NavLink to='/addFood'><li><a className="text-base md:text-lg font-normal md:font-bold">👉 Add a food item
                                </a></li></NavLink>
                                <NavLink to='myCart'><li><a className="text-base md:text-lg font-normal md:font-bold">👉 My ordered food items</a></li></NavLink>
                                <Link to='/signIn'><button className="btn btn-outline text-white bg-yellow-600 normal-case w-full text-base border-none md:text-lg font-bold">Switch Account</button></Link>
                            </ul>
                        </div>
                    </div>

                    {/* theme toggle */}

                    <button onClick={toggleTheme} className="pl-5 normal-case">
                        {theme === "light" ? <MdDarkMode className='text-3xl mt-1'></MdDarkMode> : <MdLightMode className='text-white text-3xl mt-1'></MdLightMode>}
                    </button>

                    {/* signIn signOut toggle  */}

                    <div className="pl-5 min-w-20">
                        {
                            user ? (
                                <Link to='/'><button onClick={handleSignOut} className='normal-case w-full text-base md:text-lg btn border-none btn-outline font-bold text-white bg-yellow-600'>SignOut</button></Link>
                            ) : (
                                <Link to='/signIn'><button className='normal-case border-none text-base md:text-lg w-full btn btn-outline font-bold text-black'>SignIn</button></Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;