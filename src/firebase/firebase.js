import * as firebase from "firebase";

const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain:process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.FIREBASE_APP_ID,
  measurementId:process.env.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { firebase, database as default };
// // database.ref().set({
// //   name: "Naveen Kumar",
// //   age: 32,
// //   address: {
// //     city: "Aligarh",
// //     country: "India",
// //   },
// // });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 100,
//   createdAt: 943944,
// });

// database.ref("expenses").push({
//   description: "PhoneRent",
//   note: "",
//   amount: 1000,
//   createdAt: 440,
// });

// database.ref("expenses").push({
//   description: "Food Rent",
//   note: "",
//   amount: 999,
//   createdAt: 394344,
// });

// // // Iteration 1
// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   });

// // // Iteration 2
// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // Iteration 3
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// //child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
