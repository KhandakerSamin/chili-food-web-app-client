/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import loadingImg from '../assets/img/c4cb9abc7c69713e7e816e6a624ce7f8 - Copy.gif'

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <img className="w-2/5 mx-auto" src={loadingImg} alt="" />
    }
    
    if(user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signIn'></Navigate>

};

export default PrivateRoute;