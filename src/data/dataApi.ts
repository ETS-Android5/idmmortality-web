import { Plugins } from "@capacitor/core";
import { Session } from "../models/Session";
import { Speaker } from "../models/Speaker";
import { Location } from "../models/Location";
import * as firebase from "firebase/app";
// import { getAuth } from "../data/firebaseAuth";

const { Storage } = Plugins;

const locationsUrl = "/assets/data/locations.json";
const sessionsUrl = "/assets/data/sessions.json";
const speakersUrl = "/assets/data/speakers.json";

const HAS_LOGGED_IN = "hasLoggedIn";
const HAS_LOGGED_OUT = "hasLoggedOut";
const HAS_SEEN_TUTORIAL = "hasSeenTutorial";
const USERNAME = "username";
const PASSWORD = "password";
const EMAIL = "email";

export const getConfData = async () => {
  const response = await Promise.all([
    fetch(sessionsUrl),
    fetch(locationsUrl),
    fetch(speakersUrl)
  ]);
  const sessions = (await response[0].json()) as Session[];
  const locations = (await response[1].json()) as Location[];
  const speakers = (await response[2].json()) as Speaker[];
  const allTracks = sessions
    .reduce((all, session) => all.concat(session.tracks), [] as string[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();
  const data = {
    sessions,
    locations,
    speakers,
    allTracks,
    filteredTracks: [...allTracks]
  };
  return data;
};

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
    Storage.get({ key: EMAIL }),
    Storage.get({ key: PASSWORD }),
    Storage.get({ key: HAS_LOGGED_OUT })
  ]);
  const isLoggedin = (await response[0].value) === "true";
  const hasSeenTutorial = (await response[1].value) === "true";
  const username = (await response[2].value) || undefined;
  const email = (await response[3].value) || undefined;
  const password = (await response[4].value) || undefined;
  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
    email,
    password
  };
  return data;
};

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
};

export const setIsLoggedOutData = async (isLoggedOut: boolean) => {
  firebase
    .auth()
    .signOut()
    .then(async function() {
      console.log("Cerrada sesion Firebase");

      await Storage.set({
        key: HAS_LOGGED_OUT,
        value: JSON.stringify(isLoggedOut)
      });
    })
    .catch(function(error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Errores de code y mensaje : " + errorCode + errorMessage);
    });
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({
    key: HAS_SEEN_TUTORIAL,
    value: JSON.stringify(hasSeenTutorial)
  });
};

/**
 * Por ahora creamos las 3 funciones por separado, pero lo idoneo será una funcion setUserData con username, password e email
 *
 * Por otra parte esta parte de dataApi no trabajará con Storage, sino con Firebase.
 */

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
};

export const setEmailData = async (email?: string) => {
  if (!email) {
    await Storage.remove({ key: EMAIL });
  } else {
    await Storage.set({ key: EMAIL, value: email });
  }
};

export const setPasswordData = async (password?: string) => {
  if (!password) {
    await Storage.remove({ key: PASSWORD });
  } else {
    await Storage.set({ key: PASSWORD, value: password });
  }
};
