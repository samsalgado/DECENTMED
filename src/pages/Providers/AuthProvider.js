
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import app from '../../firebase/FrebaseConfig';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) =>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

 const signInUser = (email, password) =>{
setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
} 

const googleSignIn = () =>{
setLoading(true)
 return signInWithPopup(auth, googleProvider);
}

const updatePhoto = (name) =>{
setLoading(true)
return updateProfile(auth.currentUser,{
displayName:name
})
}

const logOut = () =>{
setLoading(true)
return signOut(auth)
}

const sendPasswordReset = (auth,email) =>{
setLoading(true)
sendPasswordResetEmail(auth,email)

}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
// get and set token
if(currentUser){
axios.post(`https://decentmed-server.vercel.app/jwt`,{email: currentUser.email})
.then(data=>{
localStorage.setItem('access-token',data.data.token);
setLoading(false)
})
}
else{
localStorage.removeItem('access-token')
}
// setLoading(false)
})
return ()=>{

return unsubscribe()
}
},[])

const authInfo = {
user,
loading,
createUser,
signInUser,
googleSignIn,
updatePhoto,
logOut,
sendPasswordReset,
}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;