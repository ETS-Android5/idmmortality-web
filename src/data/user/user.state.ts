export interface UserState {
  isLoggedin: boolean;
  isLoggedout: boolean;
  picture?: string;
  email?: string;
  username?: string;
  password?: string;
  darkMode: boolean;
  hasSeenTutorial: boolean;
  loading: boolean;
}
