import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Si necesitas Analytics, descomenta la siguiente línea
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6Uydk3Wf3lViafJEalQqSwwi1KRHezKI",
  authDomain: "zapateriahers-945e5.firebaseapp.com",
  projectId: "zapateriahers-945e5",
  storageBucket: "zapateriahers-945e5.appspot.com",
  messagingSenderId: "943516112846",
  appId: "1:943516112846:web:55316600fd13a159e6fd9f",
  measurementId: "G-GTQJ1WP6TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Si necesitas Analytics, descomenta la siguiente línea
// const analytics = getAnalytics(app);

// Obtén la instancia de Firestore
export const db = getFirestore(app);
