import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYupxj7evf9UWfxJubjzIGdw5v9hPzSZY",
  authDomain: "fir-financialtracker.firebaseapp.com",
  projectId: "fir-financialtracker",
  storageBucket: "fir-financialtracker.appspot.com",
  messagingSenderId: "738430274862",
  appId: "1:738430274862:web:8e9b9c47069fc8081efebf",
};

//init firebase

firebase.initializeApp(firebaseConfig);

// init service

const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFireStore, projectAuth };
