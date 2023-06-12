// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQgWcW-8bBxfQ-aAp579AZbXk-33Avf4",
  authDomain: "shoutouts-f7008.firebaseapp.com",
  projectId: "shoutouts-f7008",
  storageBucket: "shoutouts-f7008.appspot.com",
  messagingSenderId: "981721365176",
  appId: "1:981721365176:web:97a3e536b34fc73d34924d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
