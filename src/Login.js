import firebase from "firebase/app";

export default function Login() {
  function handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("email profile");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log("logged in", result);
      })
      .catch(function (error) {
        console.log("error logging in", error);
      });
  }

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
