import {
  getUserData,
  setIsLoggedInData,
  setIsLoggedOutData,
  setUsernameData,
  setEmailData,
  setPasswordData,
  setHasSeenTutorialData,
  setPictureData
} from "../dataApi";
import { ActionType } from "../../util/types";
import { UserState } from "./user.state";
import { logOutAuth } from "../firebaseAuth";

export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getUserData();
  dispatch(setData(data));
  dispatch(setLoading(false));
};

export const setLoading = (isLoading: boolean) =>
  ({
    type: "set-user-loading",
    isLoading
  } as const);

export const setData = (data: Partial<UserState>) =>
  ({
    type: "set-user-data",
    data
  } as const);

export const logoutUser = () => async () => {
  await setIsLoggedInData(false);
  await setIsLoggedOutData(true);
  logOutAuth();
};

export const setIsLoggedIn = (loggedIn: boolean) => async (
  dispatch: React.Dispatch<any>
) => {
  await setIsLoggedInData(loggedIn);
  return {
    type: "set-is-loggedin",
    loggedIn
  } as const;
};

export const setIsLoggedOut = (loggedOut: boolean) => async (
  dispatch: React.Dispatch<any>
) => {
  await setIsLoggedOutData(loggedOut);
  return {
    type: "set-is-loggedout",
    loggedOut
  } as const;
};
export const setPicture = (picture?: string) => async (
  dispatch: React.Dispatch<any>
) => {
  await setPictureData(picture);
  return {
    type: "set-picture",
    picture
  } as const;
};

export const setEmail = (email?: string) => async (
  dispatch: React.Dispatch<any>
) => {
  await setEmailData(email);
  return {
    type: "set-email",
    email
  } as const;
};

export const setUsername = (username?: string) => async (
  dispatch: React.Dispatch<any>
) => {
  await setUsernameData(username);
  return {
    type: "set-username",
    username
  } as const;
};

export const setPassword = (password?: string) => async (
  dispatch: React.Dispatch<any>
) => {
  await setPasswordData(password);
  return {
    type: "set-password",
    password
  } as const;
};

export const setHasSeenTutorial = (hasSeenTutorial: boolean) => async (
  dispatch: React.Dispatch<any>
) => {
  await setHasSeenTutorialData(hasSeenTutorial);
  return {
    type: "set-has-seen-tutorial",
    hasSeenTutorial
  } as const;
};

export const setDarkMode = (darkMode: boolean) =>
  ({
    type: "set-dark-mode",
    darkMode
  } as const);

export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setIsLoggedOut>
  | ActionType<typeof setPassword>
  | ActionType<typeof setEmail>
  | ActionType<typeof setUsername>
  | ActionType<typeof setPicture>
  | ActionType<typeof setHasSeenTutorial>
  | ActionType<typeof setDarkMode>;
