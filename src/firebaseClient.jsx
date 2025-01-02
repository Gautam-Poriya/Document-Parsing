// firebaseClient.js
import { initializeApp } from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// import {  useNavigate } from "react-router-dom"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:   import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const Provider = new GoogleAuthProvider();
  // Your web app's Firebase configuration

// const navigate =useNavigate();
// export const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const token = await result.user.getIdToken();
  
//       await fetch('http://localhost:3000/lamma-cloud/auth', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
       
//       }
//     );
//     // console.log(`user imfo:`, token);
//     //       alert(`Welcome ${token.displayName}`);
//     //       navigate("/")
//     } catch (error) {
//       console.error('Google Sign-in Failed', error);
//     }
//   };