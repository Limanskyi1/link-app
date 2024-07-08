
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBzfo-Wx_2TnoxeQ7ft_M6hUnPF7HjhOIw",
  authDomain: "link-app-47095.firebaseapp.com",
  projectId: "link-app-47095",
  storageBucket: "link-app-47095.appspot.com",
  messagingSenderId: "687796247064",
  appId: "1:687796247064:web:e7a3f0e253ad6dd503016d",
  measurementId: "G-8EF8YHB6V2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);