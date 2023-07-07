const firebase = require("firebase-admin")
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require("../aitraining-c85ba-firebase-adminsdk-4x4j2-ad426a45b8.json");

const app = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});


const db = getFirestore(app);

module.exports = db