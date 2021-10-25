import firebase from "firebase"
import "firebase/analytics"
export const firebaseConfig = {
    apiKey: 'AIzaSyArAzMQJPh9WuSk9eMaBzP38DhuAK2p41I',
    authDomain: 'drchoi-eyeclinic-homepage.firebaseapp.com',
    projectId: 'drchoi-eyeclinic-homepage',
    storageBucket: 'drchoi-eyeclinic-homepage.appspot.com',
    messagingSenderId: '153536395761',
    appId: '1:153536395761:web:6bda81c9e29e2af7d16c50',
    measurementId: 'G-R8RJT7N8XS',
}

firebase.initializeApp(firebaseConfig)

export const firebaseAnalytics = firebase.analytics()