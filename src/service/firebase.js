import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

export default class Firebase {
  firebaseInit () {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
    }
    firebase.initializeApp(firebaseConfig);
    // console.log(firebaseConfig);
  };

  googleLogin () {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    firebase.auth()
    .signInWithPopup(provider);
  }

  googleLogout () {
    firebase.auth().signOut().then(() => {
      console.log('로그아웃 되었습니다.');
      return;
    })
  }

  authObserver(user){
    firebase.auth().onAuthStateChanged(user);
  }

  readData(){
    const database = firebase.database();
    console.log(database);
  }
}