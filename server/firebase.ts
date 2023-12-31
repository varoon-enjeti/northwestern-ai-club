import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

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

 export async function newMember(firstName: string, lastName: string, email: string){
  try {
    await setDoc(doc(db, "users", email), {
      firstName: firstName,
      lastName: lastName
    });
    console.log("New user " + email + " added.");
  } catch (e) {
    console.error("Error adding new user " + email + ".");
    console.log(e);
  } finally {
        console.log("Done");
    }
}