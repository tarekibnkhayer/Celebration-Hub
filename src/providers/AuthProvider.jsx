import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // create user / sign up user:
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in / login user:
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Set an authentication state observer:
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) =>{
            if(user){
                setUser(CurrentUser);
            }
            else{
                setUser(null);
            }
        },)
        return () => unSubscribe();
    },[user])
    // sign out /logout user:
    const signOutUser = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}