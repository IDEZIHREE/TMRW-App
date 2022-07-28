import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBXTH--tr1aKodJOeyGili22HrGb3pADv4",
  authDomain: "tmrw-app-24cdb.firebaseapp.com",
  databaseURL: "https://tmrw-app-24cdb.firebase.io.com/",
  projectId: "tmrw-app-24cdb",
  storageBucket: "tmrw-app-24cdb.appspot.com",
  messagingSenderId: "178598924638",
  appId: "1:178598924638:web:226d5b23d648ffa7493fcf",
  measurementId: "G-LPRJ7G1570"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database