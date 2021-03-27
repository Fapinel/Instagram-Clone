// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDE1HQAdP2hUm1VLTGJsQDUQSscsxKdx7w",
    authDomain: "instagram-clone-23bb3.firebaseapp.com",
    projectId: "instagram-clone-23bb3",
    storageBucket: "instagram-clone-23bb3.appspot.com",
    messagingSenderId: "857665705810",
    appId: "1:857665705810:web:2109490e2f826ac0084c8b",
    measurementId: "G-814G0KNWKJ"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };



  // export default db;