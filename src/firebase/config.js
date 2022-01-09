import firebase from "firebase/compat/app";
import "firebase/compat/storage"; // store
import "firebase/compat/firestore"; // database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIVrh7VnlurnDXV-0K1uwZDIdUWHXFxYc",
  authDomain: "photo-gallery-react-app.firebaseapp.com",
  projectId: "photo-gallery-react-app",
  storageBucket: "photo-gallery-react-app.appspot.com",
  messagingSenderId: "507511200005",
  appId: "1:507511200005:web:96971392b534dfc92cff6c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; // in order to use them in the other files of the app
