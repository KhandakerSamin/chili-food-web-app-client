/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth" ;
import auth from "../Config.jsx/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }; 

    const updateimgName = (photo, name) =>{
        return updateProfile(auth.currentUser ,{
            displayName: name, photoURL: photo
        })
    } 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User in the auth state changed", currentUser);

            const userEmail = currentUser?.email || user?.email ;
            const loggedUser = {email : userEmail }

            setUser(currentUser);
            setLoading(false);

            // token if there are user
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials:true})
                .then(res => {
                    console.log("Token Response" , res.data)
                })
            }else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
        });

        return () => {
            unSubscribe();
        };
        
    }, [user]);

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleSingIn,
        updateimgName
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;