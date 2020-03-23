import "firebase/auth";
import * as firebase from "firebase/app";

import {
  setIsLoggedIn,
  setUsername,
  setPassword,
  setEmail
} from "../data/user/user.actions";

export const EmailPasswordLoginAuth = async (
  email: string,
  password: string
) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      alert("Errores de code y mensaje : " + errorCode + errorMessage);
    });
};

export const GoogleLoginAuth = async () => {
  /*
   */
  // Start a sign in process for an unauthenticated user.
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope("profile");
  // provider.addScope("email");
  return firebase.auth().signInWithPopup(provider);
   
};

export const logOutAuth = async () => {
  firebase.auth().signOut().then(function() {
    
  }).catch(function(error) {
    // An error happened.
  });
}
