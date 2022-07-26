import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlKjd-oUlU8sn6_XMqmUGSLxMRKRRtJvk",
  authDomain: "portal-usuarios-92d1a.firebaseapp.com",
  projectId: "portal-usuarios-92d1a",
  storageBucket: "portal-usuarios-92d1a.appspot.com",
  messagingSenderId: "597443558368",
  appId: "1:597443558368:web:d19eb72df08bb9d04bc985"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
