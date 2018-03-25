import firebase from 'firebase';
import 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCVJ3XAVrfnIrcniy52KO6gmoetxxpt3mk",
  authDomain: "test-23d6b.firebaseapp.com",
  databaseURL: "https://test-23d6b.firebaseio.com",
  projectId: "test-23d6b",
  storageBucket: "test-23d6b.appspot.com",
  messagingSenderId: "320937973863"
}

const app = firebase.initializeApp(firebaseConfig);
app.firestore();

console.log('DONE!');
export default app ;