import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyCOkgDYmYJa6j5PHhWJEhxwmOqgTe3bT5c",
  authDomain: "instaclone-796a3.firebaseapp.com",
  projectId: "instaclone-796a3",
  storageBucket: "instaclone-796a3.appspot.com",
  messagingSenderId: "734189136604",
  appId: "1:734189136604:web:2b0e64ad59638018e46219",
  measurementId: "G-X90NGEDHQK"
});

const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
