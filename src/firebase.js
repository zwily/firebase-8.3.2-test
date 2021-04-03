import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig.json";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === "development") {
  firebase.auth().useEmulator("http://localhost:9099/");
  firebase.firestore().useEmulator("localhost", 8080);
}
