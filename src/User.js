import { useState, useEffect } from "react";
import firebase from "firebase/app";

export default function User() {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    (async () => {
      const user = firebase.auth().currentUser;

      try {
        // this will blow up, apparently because auth info is not sent to firestore in 8.3.2
        await firebase.firestore().collection("users").doc(user.uid).get();
      } catch (e) {
        console.log("got error", e);
        setFailed(true);
      }

      setLoading(false);
    })();
  });

  return <h1>{failed ? "Failed!" : loading ? "loading...." : "Yay!"}</h1>;
}
