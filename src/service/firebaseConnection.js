import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCgULMzIZ0rwKTJdhIMLja9mBzJirWtrAk',
  authDomain: 'cifinance-cfe63.firebaseapp.com',
  projectId: 'cifinance-cfe63',
  storageBucket: 'cifinance-cfe63.appspot.com',
  messagingSenderId: '909754078480',
  appId: '1:909754078480:web:0535225f3e78909a7b8195',
  measurementId: 'G-9D07DTG9DD',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
// const analytics = getAnalytics(app);
