export interface UserState {
  isLoggedin: boolean;
  email?: string;
  username?: string;
  password?: string;
  darkMode: boolean;
  hasSeenTutorial: boolean;
  loading: boolean;
}
