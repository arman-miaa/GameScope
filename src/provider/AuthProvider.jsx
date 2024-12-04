import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, ProviderId, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


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
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;