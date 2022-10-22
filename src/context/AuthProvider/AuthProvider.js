import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = { user, providerLogin }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('indise auth user stage', currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    })


    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;