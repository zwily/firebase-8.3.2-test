# Demonstrating problem with firebase-sdk 8.3.2

Set up a new firebase app with auth and firestore enabled, and put the config json into `src/firebaseConfig.json`.

Start firebase emulator:

```
$ firebase emulators:start
```

Start the app:

```
$ npm start
```

Browse to http://localhost:3000/, hit login, create an account, and you'll see "Failed!". Open the console to see the error.

Go into `package.json` and change firebase from version "8.3.2" to "8.3.1", do `npm install`, and rerun the app, and you'll see "Yay!".

I believe that on 8.3.2, no auth information is being sent to Firestore.
