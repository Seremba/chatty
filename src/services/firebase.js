import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyBWGFoaK8KU_S6gHeXMSkJuw9r51iuJvmM",
    authDomain: "chatty-295ec.firebaseapp.com",
    databaseURL: "https://chatty-295ec.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
