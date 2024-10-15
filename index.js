const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shopping-list-4125d.firebaseio.com"
});