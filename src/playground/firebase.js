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

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        console.log('snapshot', snapshot.val());
    });

/*
database.ref('notes').push({
    title: 'Second note!',
    body: 'Some text 2'
});
*/

/*
database.ref('notes/-KzHsGfnB_GlzTRyTtYF').update({
    title: 'CIAO',
    age: 26
});
*/



/*
database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 25000,
    createdAt: 9761222222222
}); 
*/

/*
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with fetching', e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);
*/
/*
database.ref('location')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('error fetching',e);
    });
*/
/*
database.ref().set({
    name: 'Andrea Bolognesi',
    age: 26,
    isSingle: false,
    job: 'Software Developer',
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed. ', e);
});
*/

/*
database.ref().update({
    name: 'Mike',
    age: 29,
    job: 'Software Developer',
    isSingle: null
}).then(() => {
    console.log('Data is updated');
}).catch((e) => {
    console.log('This failed. ', e);
});
*/

/*
database.ref('isSingle').set(null).then(function() {
    console.log("Remove succeeded.")
}).catch(function(error) {
    console.log("Remove failed: " + error.message)
});;
*/

/*
database.ref('isSingle');
isSingleRef.remove()
  .then(function() {
    console.log("Remove succeeded.")
}).catch(function(error) {
    console.log("Remove failed: " + error.message)
});
*/


 