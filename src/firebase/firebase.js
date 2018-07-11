import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expenses = [
//   {
//     id: 1,
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   },
//   {
//     id: 2,
//     description: 'Rent',
//     note: '',
//     amount: 94100,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
//   },
//   {
//     id: 3,
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
//   },
// ];

// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// // database.ref().set({
// //   name: 'Mark!',
// //   age: 29,
// //   isSingle: false,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Irvine',
// //     state: 'California',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Saved!');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref('attributes').set({
// //   height: '5\'5\"',
// //   weight: 125 
// // }).then(() => {
// //   console.log('Saved!');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref('isSingle').set(null);

// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log('Data changed:', data);
// //   console.log(`${data.name} is ${data.age} and works at ${data.job.company}`);
// // }, (e) => {
// //   console.log('Error occurred:', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'McGraw-Hill',
// //   'location/state': 'Irvine',
// //   'location/city': 'California',
// //   favorites: {
// //     color: 'purple',
// //     animal: 'Hippo'
// //   }
// // })

// // database.ref('isSingle').remove()
// // .then(function() {
// //   console.log("Remove succeeded.")
// // })
// // .catch(function(error) {
// //   console.log("Remove failed: " + error.message)
// // });

// // console.log('Changes Requested!');