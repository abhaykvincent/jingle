import firebase from 'firebase'
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAzIshqL_NcjPfwo51uH074EbK9iqhB2NI",
    authDomain: "dalhousie1881.firebaseapp.com",
    projectId: "dalhousie1881",
    storageBucket: "dalhousie1881.appspot.com",
    messagingSenderId: "689858751941",
    appId: "1:689858751941:web:96617639489e6d0f02afac",
    measurementId: "G-Q1TT77B48W"
  };
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app