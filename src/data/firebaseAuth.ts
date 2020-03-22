import "firebase/auth";
import * as firebase from "firebase/app";

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
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase.auth().signInWithRedirect(provider);

  firebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        let token = result.credential;
      }
      let user = result.user;
      alert("Hello " + user);
    });

  /*
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;

      alert("Hello " + user);
    });*/
};
