import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBK4Qk3UcRdq9XnLh2u3_Y64R5uz2ruy9I",
    authDomain: "clone-399b4.firebaseapp.com",
    projectId: "clone-399b4",
    storageBucket: "clone-399b4.appspot.com",
    messagingSenderId: "337464948748",
    appId: "1:337464948748:web:ccb15fbc8088d5ad2dd629",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider().addScope('https://www.googleapis.com/auth/youtube.force-ssl');

