import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: import.meta.env.API_KEY_FIREBASE,
//     authDomain: import.meta.env.AUTH_DOMAIN_FIREBASE,
//     projectId: import.meta.env.PROJECT_ID_FIREBASE,
//     storageBucket: import.meta.env.STORAGE_BUCKET_FIREBASE,
//     messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
//     appId: import.meta.env.APP_ID_FIREBASE,
//     measurementId: import.meta.env.MEASUREMENT_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyBjdJL_q8rdcdbolBM38NfdQ9WF6_QKcMk",
    authDomain: "fir-storage-image-98000.firebaseapp.com",
    projectId: "fir-storage-image-98000",
    storageBucket: "fir-storage-image-98000.firebasestorage.app",
    messagingSenderId: "130838738902",
    appId: "1:130838738902:web:039915cc2cc964c6135677",
    measurementId: "G-LJYPR9KQ6X"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);