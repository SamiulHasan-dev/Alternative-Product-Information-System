import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const logInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logInWithGitHub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const profileUpdate = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    const createUser = async (email, password, name, photoUrl) => {
        
        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;
            
            
            await updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            });

            
            return userCredential;
        } 
        catch (error) {
            return error;
        }
        finally{
            setLoading(true);
        }
        
    }
    

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        });
        return () => {
            unsubscribe();
        };
    },[])

    const authInfo = {user,createUser, logOut, signIn, logInWithGoogle, loading, logInWithGitHub, profileUpdate}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

