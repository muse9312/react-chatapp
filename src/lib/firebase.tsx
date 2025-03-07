import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiYGl2T16ZaaUmXTHnRMGGoPoltRoHRTo',
  authDomain: 'test-1e835.firebaseapp.com',
  projectId: 'test-1e835',
  storageBucket: 'test-1e835.firebasestorage.app',
  messagingSenderId: '920037378204',
  appId: '1:920037378204:web:74ff5fc77d44846418c559',
  measurementId: 'G-76MPB184R9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
