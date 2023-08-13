import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { exit } from "process";

const firebaseConfig = {
  apiKey: "AIzaSyCRBNdSciIhOheTbcPr8WJHZoNyjM2y6Mo",
  authDomain: "northwestern-ai-website-3b846.firebaseapp.com",
  projectId: "northwestern-ai-website-3b846",
  storageBucket: "northwestern-ai-website-3b846.appspot.com",
  messagingSenderId: "157698718705",
  appId: "1:157698718705:web:d0e946befe26379927a250",
  measurementId: "G-MQHVCXC1KX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function newMember(firstName, lastName, email, netid, major, year){
  try {
    setDoc(doc(db, "users", netid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      major: major,
      year: year
    });
    console.log("New user " + netid + " added.");
  } catch (e) {
    console.error("Error adding new user " + netid + ".");
    console.log(e);
  } finally {
        console.log("Done");
    }
}

newMember("Varoon", "Enjeti", "VaroonEnjeti2025@u.northwestern.edu", "vve4153", "Computer Science", "2025");
newMember("Varoon", "Enjeti", "VaroonEnjeti2025@u.northwestern.edu", "vve4151", "Computer Science", "2025");
process.exit()