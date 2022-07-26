import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDK7rOu189pwV4k-6IhG_K50dWDr-Ufudw',
  authDomain: 'shop-firebase-82922.firebaseapp.com',
  projectId: 'shop-firebase-82922',
  storageBucket: 'shop-firebase-82922.appspot.com',
  messagingSenderId: '633615042480',
  appId: '1:633615042480:web:eb85701200f68bf770b875',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
