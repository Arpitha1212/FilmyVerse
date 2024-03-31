import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDaUDbPxmsMk4Sxw8ZmvS3wLMZxwYkGChw",
  authDomain: "filmyverse-61da2.firebaseapp.com",
  projectId: "filmyverse-61da2",
  storageBucket: "filmyverse-61da2.appspot.com",
  messagingSenderId: "210027037028",
  appId: "1:210027037028:web:b3c64b6eb81e52e7947a71"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef =collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export const usersRef = collection(db,"users");
export default app;