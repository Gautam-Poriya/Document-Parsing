// import React from "react";
// import { signInWithPopup , GoogleAuthProvider , getAuth } from "firebase/auth";
// // import { auth, provider } from "./firebaseConfig.js";
// import {  useNavigate } from "react-router-dom"
// const SignIn = () => {
//     const navigate =useNavigate();
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
//   return (
//     <>
//       <div className=" border-2 border-black rounded-xl w-1/3 h-screen ">
      
//        <div className="w-full"> <button onClick={handleGoogleSignIn} className="flex justify-center items-center ">Sign In With Google</button></div>
//       </div>
     
//     </>
//   );
// };
// export default SignIn;
