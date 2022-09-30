import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXTH--tr1aKodJOeyGili22HrGb3pADv4",
  authDomain: "tmrw-app-24cdb.firebaseapp.com",
  projectId: "tmrw-app-24cdb",
  storageBucket: "tmrw-app-24cdb.appspot.com",
  messagingSenderId: "178598924638",
  appId: "1:178598924638:web:226d5b23d648ffa7493fcf",
  measurementId: "G-LPRJ7G1570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Auth = getAuth(app);


export default db;