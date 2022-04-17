import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCQQvgVmkdYRa5ALIaOCYrQ9I1bpFSEm6k",
    authDomain: "shopme-62b3c.firebaseapp.com",
    projectId: "shopme-62b3c",
    storageBucket: "shopme-62b3c.appspot.com",
    messagingSenderId: "569435533887",
    appId: "1:569435533887:web:1ddd5aadbe2fdcfea13e8a"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
