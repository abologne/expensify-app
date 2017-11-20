import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAchbzyIGxYEKDZzgDRU3GtaCt9QmuGYao",
    authDomain: "expensify-c7fb4.firebaseapp.com",
    databaseURL: "https://expensify-c7fb4.firebaseio.com",
    projectId: "expensify-c7fb4",
    storageBucket: "expensify-c7fb4.appspot.com",
    messagingSenderId: "500073895424"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };