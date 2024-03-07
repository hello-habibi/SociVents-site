import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Auth/FirebaseApp";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//this is the code for register with email and password
export const RegisterwithPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })

}
//this is to sign in with email and password 
export const signInWithPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      console.log(user.user);
    })
    .catch(error => {
      console.log(error.message);
    })
}
//this is to signout user 
export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Successfully logged out");
    })
    .catch(error => {
      console.error(error.message);
    });
};
//this is for google pop up sign In

export const withGooglePopUp = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("succesfully ", result.user);
    })
    .catch((error) => {
      console.log(error.message);
    })
}
