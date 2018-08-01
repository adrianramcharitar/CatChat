import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

// Initialize our Firebase SDK
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

// DATA REFERENCES ////////////////////////////////////////
let usersObject = databaseRef.child('users');

// Extend the "users" reference with currentUser management
usersObject.currentUser = null;
usersObject.setCurrentUser = user => {
    this.currentUser = user;
};
usersObject.getCurrentUser = () => {
    return this.currentUser;
};

export const users = usersObject;
export const messages = databaseRef.child('messages');
