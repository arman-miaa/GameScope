import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [users, setUsers] = useState(null);

    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const authInfo = {
      name: "arman mia",
      users,
      setUsers,
      setLoader,
      createUser,
      signInUser,
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