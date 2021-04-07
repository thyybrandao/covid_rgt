import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyAJBOfFBptOrt4jq9ELGZNeZnpkEVmuSjw',
  authDomain: 'covid-registro.firebaseapp.com',
  databaseURL: 'https://covid-registro.firebaseio.com',
  projectId: 'covid-registro',
  storageBucket: 'covid-registro.appspot.com',
  messagingSenderId: '805218426554',
  appId: '1:805218426554:web:2c27faacf53171067fec83',
}
firebase.default.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const situationCollection = db.collection('situation')
const phonesCollection = db.collection('phones')
const docsCollection = db.collection('docs')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  situationCollection,
  phonesCollection,
  docsCollection,
}
