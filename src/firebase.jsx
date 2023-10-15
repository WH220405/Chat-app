import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfYNaPawmuS9ovi1r09rQEYCPQIpwIPWw",
  authDomain: "chat-f91ee.firebaseapp.com",
  projectId: "chat-f91ee",
  storageBucket: "chat-f91ee.appspot.com",
  messagingSenderId: "837918700934",
  appId: "1:837918700934:web:eb7b78f192b1169f90e807",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
