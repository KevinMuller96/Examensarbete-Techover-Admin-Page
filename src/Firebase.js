// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4VwkchdiX15kCjxL3Ybcjoi7pHWdchWg",
  authDomain: "techover-dashboard-fe8f1.firebaseapp.com",
  projectId: "techover-dashboard-fe8f1",
  storageBucket: "techover-dashboard-fe8f1.appspot.com",
  messagingSenderId: "20954471930",
  appId: "1:20954471930:web:f89de072d94303f459d843",
  measurementId: "G-HMJGBF4ZWR",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const fs = getFirestore(app);
export const auth = getAuth(app);
