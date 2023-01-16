import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHjtgxhYuQA9qPoI9Jm0KVPGrZy_LZ1SM',
  authDomain: 'articlelist-1e55a.firebaseapp.com',
  projectId: 'articlelist-1e55a',
  storageBucket: 'articlelist-1e55a.appspot.com',
  messagingSenderId: '809893736879',
  appId: '1:809893736879:web:5b8e01da12e5ff14023f5a',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
