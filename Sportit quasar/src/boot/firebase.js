import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

let db

export default ({ Vue }) => {
  Vue.use(firestorePlugin)

  var firebaseConfig = {
    apiKey: "AIzaSyDaeMNhYL8rfZCbu4EAAaZasneXFS4zobs",
    authDomain: "sportit-testing.firebaseapp.com",
    databaseURL: "https://sportit-testing.firebaseio.com",
    projectId: "sportit-testing",
    storageBucket: "sportit-testing.appspot.com",
    messagingSenderId: "11727358313",
    appId: "1:11727358313:web:314f5f72f28872f06595f8",
    measurementId: "G-8BQH83WPJC"
  };

  firebase.initializeApp(firebaseConfig)
  db = firebase.firestore()
}

export { db }
