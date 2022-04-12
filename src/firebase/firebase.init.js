import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUUVTOB3hYNoKCLN2v070xQHFnDWN-Cb8",
  authDomain: "halcyon-hotel-booking.firebaseapp.com",
  projectId: "halcyon-hotel-booking",
  storageBucket: "halcyon-hotel-booking.appspot.com",
  messagingSenderId: "61452992772",
  appId: "1:61452992772:web:953498a5d3ea4d1cd9d051",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default auth;
