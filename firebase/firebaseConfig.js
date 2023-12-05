import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {API_KEY} from "@env"

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "calendar-app-48e0a.firebaseapp.com",
  projectId: "calendar-app-48e0a",
  storageBucket: "calendar-app-48e0a.appspot.com",
  messagingSenderId: "638291721262",
  appId: "1:638291721262:web:586ac183b10e8dd10333bf"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}