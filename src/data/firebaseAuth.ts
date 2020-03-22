import "firebase/auth";
import * as firebase from "firebase/app";

export const getAuth = async () => {
  let defaultAuth = firebase.auth();
  console.log(defaultAuth);
};
