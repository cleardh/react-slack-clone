import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAqYKiC1fhFLjVH_OLqQB7Zn1PxpHBE8z8',
  authDomain: 'react-slack-clone-abb1d.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-abb1d.firebaseio.com',
  projectId: 'react-slack-clone-abb1d',
  storageBucket: 'react-slack-clone-abb1d.appspot.com',
  messagingSenderId: '795631110373',
  appId: '1:795631110373:web:5a0f477219f0994ed96c0c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
