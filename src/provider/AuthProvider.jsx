import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Loading from '../pages/Loading';


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [users, setUsers] = useState(null);

    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const sigInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    // get currect user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currctUser) => {
            setUsers(currctUser)
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    // console.log(users);
    
    const authInfo = {
      name: "arman mia",
      users,
      setUsers,
      setLoader,
      createUser,
      signInUser,
      sigInWithGoogle,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    loader ? <div>
                        <Loading></Loading>
                    </div>
                        : children
                }
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;