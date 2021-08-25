import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCb96bFYC2WOinuEIrY3ihD_8L8MUu6LvM",
    authDomain: "whatsapp-clone-9a451.firebaseapp.com",
    projectId: "whatsapp-clone-9a451",
    storageBucket: "whatsapp-clone-9a451.appspot.com",
    messagingSenderId: "809908999963",
    appId: "1:809908999963:web:a9a37fa32e5cd15e0be5be",
    measurementId: "G-MMNXKV5ELV",
};

let app;
if (firebase?.apps?.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase?.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
