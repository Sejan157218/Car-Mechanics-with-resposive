import { useEffect, useState } from "react"
import initializeAuthentication from "../Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = ()=>{
 const [user,setUser] = useState({});

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
 const signInWithGoogle=()=>{
    console.log('google');
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setUser(result.user);
  })
 }

 const logOut=()=>{
    signOut(auth).then(() => {

      })
 }

 useEffect(()=>{
   const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
          setUser({});
        }
      });
      return () => unsubscribed;
 },[])
 return {
    user,
    signInWithGoogle,
    logOut,
 }
}

export default useFirebase;