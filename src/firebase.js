import firebase from "@firebase/app";
import "@firebase/auth";

// Initialize Firebase
const config = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN_HERE',
  databaseURL: 'DB_URL_HERE',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKER',
  messagingSenderId: 'SENDER_ID'
};

firebase.initializeApp(config);

export default firebase;