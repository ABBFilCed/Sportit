import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseService from '../services/firebase'

let db

export default ({ Vue, store }) => {
  Vue.use(firestorePlugin)

  const firebaseConfig = {
    apiKey: 'AIzaSyDFOYDTny6ZibNYyTqaw5Zs3a7penBaVD8',
    authDomain: 'testsportit-315ad.firebaseapp.com',
    databaseURL: 'https://testsportit-315ad.firebaseio.com',
    projectId: 'testsportit-315ad',
    storageBucket: 'testsportit-315ad.appspot.com',
    messagingSenderId: '972715959524',
    appId: '1:972715959524:web:ed4f21ec89d5547ba678f1',
    measurementId: 'G-R0KD9YX88X'
  }

  firebase.initializeApp(firebaseConfig)

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    firebaseService.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })

  Vue.prototype.$fb = firebaseService
  store.$fb = firebaseService

  db = firebase.firestore()
}

export { db }
