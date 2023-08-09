import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKEdLUu8V9Kk7CNvkE1NHCXDPKkWBfS8U",
  authDomain: "northwestern-ai-website.firebaseapp.com",
  projectId: "northwestern-ai-website",
  storageBucket: "northwestern-ai-website.appspot.com",
  messagingSenderId: "138882543628",
  appId: "1:138882543628:web:1d591e2d0df56d803ffe29",
  measurementId: "G-KXDTCRTT9M",
  databaseURL: "https://northwestern-ai-website-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function newMember(firstName: String, lastName: String, email: String, netid: String, major: String, year: String) {
// function newMember(firstName, lastName, email, netid, major, year) {
  const db = getDatabase(app);
  set(ref(db, 'users/' + netid), {
    firstName: firstName,
    lastName: lastName,
    email: email,
    major: major,
    year: year
  }).then(() => {
    console.log(`New member ${netid} added successfully.`)
  }) .catch((error) => {
    console.error('Error adding new member:', error);
  });
  console.log('Exited Succesfully.')
}

newMember("Varoon", "Enjeti", "VaroonEnjeti2025@u.northwestern.edu", "vve4153", "Computer Science", "2025")