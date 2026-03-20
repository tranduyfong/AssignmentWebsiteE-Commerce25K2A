import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY_FIREBASE,
    authDomain: import.meta.env.AUTH_DOMAIN_FIREBASE,
    projectId: import.meta.env.PROJECT_ID_FIREBASE,
    storageBucket: import.meta.env.STORAGE_BUCKET_FIREBASE,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID_FIREBASE,
    measurementId: import.meta.env.MEASUREMENT_ID
}


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);