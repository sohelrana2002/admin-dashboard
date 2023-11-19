import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

const firebaseContext = createContext();

const FirebaseContextProvider = ({ children }) =>{


    const [user, setUser] = useState(null)

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        return signOut(auth);
    };

    const googleSignIn = () =>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            // localStorage.setItem("user", JSON.stringify(user))
        });
        return () =>{
            unsubscribe();
        };
    }, [])


    const sendValue = {
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn
    }


    return(
        <firebaseContext.Provider value={sendValue}>
            { children }
        </firebaseContext.Provider>
    )
};

const useFirebaseConext = () =>{
    return useContext(firebaseContext);
};

export { FirebaseContextProvider, useFirebaseConext }