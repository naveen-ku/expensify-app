**Project from** `The Complete React Developer Course (w/ Hooks and Redux) by Andrew Mead`

#### Skills covered
    1. React
    2. Redux
    3. Testing using JEST
    4. Firebase authentication and user accounts
    5. Javascript ES6
    6. Heroku
    7. Webpack

#### Setting up workspace for development
    1. git clone this repository.
    2. Navigate to the repository folder.
    3. `npm install` to install all the dependencies.
    4. To setup firebase integration follow these steps:
        - `cd` src
        - `mkdir` firebase
        - `touch` firebase.js
        - copy paste the code snipped given below.

#### Starting the project on localhost
    1. Build the app: `npm run build:dev`
    2. For running app: `npm run dev-server`
    3. For running test suite: `npm test -- --watch`



#### Content of firebase.js
Create a account on firebase and add project. From the project details copy paste the mentioned fields in empty strings.

```js
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };

```