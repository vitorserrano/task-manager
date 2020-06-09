import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDkRSQ1L1PjslbkF4_TKW9fHFtxc5svO6k',
  authDomain: 'task-manager-ec36d.firebaseapp.com',
  databaseURL: 'https://task-manager-ec36d.firebaseio.com',
  projectId: 'task-manager-ec36d',
  storageBucket: 'task-manager-ec36d.appspot.com',
  messagingSenderId: '662997769607',
  appId: '1:662997769607:web:7c7bdb8469186a2b128722',
  measurementId: 'G-RZ590MK42T',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.firestore();
