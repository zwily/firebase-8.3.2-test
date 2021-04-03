import { useState, useEffect } from "react";
import "./firebase";
import firebase from "firebase/app";
import Login from "./Login";
import User from "./User";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(user);
      } else {
        setLoggedIn(null);
      }
    });
  }, [setLoggedIn]);

  return <div className="App">{loggedIn ? <User /> : <Login />}</div>;
}

export default App;
