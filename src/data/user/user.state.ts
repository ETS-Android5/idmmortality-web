export interface UserState {
  isLoggedin: boolean;
  isLoggedout: boolean;
  email?: string;
  username?: string;
  password?: string;
  darkMode: boolean;
  hasSeenTutorial: boolean;
  loading: boolean;
}
