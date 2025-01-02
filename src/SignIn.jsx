import React from "react";
// import {   GoogleAuthProvider } from "./firebaseClient";
 import { auth,Provider } from "./firebaseClient.jsx";
import {  useNavigate } from "react-router-dom"
// import { signInWithGoogle } from "./firebaseClient";
import { signInWithPopup,getAuth,GoogleAuthProvider } from "firebase/auth";
//   const auth = getAuth(app);
//   const Provider = new GoogleAuthProvider();

const SignIn = () => {
    const navigate =useNavigate();
//   const handleGoogleSignIn = async () => {
//     try {
//    const result= await signInWithPopup(auth, provider);
//    const user=result.user;
    
//       console.log(`user imfo:`, user);
//       alert(`Welcome ${user.displayName}`);
//       navigate("/")
//     } catch (error) {
//       console.error("error during Google sign In", error.message);
//     }
//   };

const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth,Provider);
      const token = await result.user.getIdToken();
  
      await fetch('http://localhost:3000/lamma-cloud/auth', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
       
      }
    );
    navigate("/")
    // console.log(`user imfo:`, token);
    //       alert(`Welcome ${token.displayName}`);
    //       navigate("/")
    } catch (error) {
      console.error('Google Sign-in Failed', error);
    }
  };
  return (
    <>
      <div className=" border-2 border-black rounded-xl w-full h-screen ">
      
       <div className="w-full flex items-center justify-center mt-52"> <button onClick={signInWithGoogle} className="flex justify-center items-center w-auto h-20 bg-slate-200">Sign In With Google</button></div>
      </div>
     
    </>
  );
};
export default SignIn;
