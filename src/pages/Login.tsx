import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonLoading,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonGrid
} from "@ionic/react";
import { logoGoogleplus, logoTwitter, logoFacebook } from "ionicons/icons";
import "./css/Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setPassword,
  setEmail,
  setPicture
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";
import { GoogleLoginAuth, EmailPasswordLoginAuth } from "../data/firebaseAuth";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setPassword: typeof setPassword;
  setEmail: typeof setEmail;
  setPicture: typeof setPicture;
}

interface LoginProps extends OwnProps, DispatchProps {}

const Login: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setPassword: setPasswordAction,
  setEmail: setEmailAction,
  setPicture: setPictureAction
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const openSocial = (network: string) => {
    switch (network) {
      case "Facebook":
        setLoadingMessage(`Logging with ${network}`);
        setShowLoading(true);

        break;
      case "Google+":
        setLoadingMessage(`Logging with ${network}, choose your account`);
        setShowLoading(true);
        GoogleLoginAuth()
          .then(async result => {
            if (result.user) {
              await setIsLoggedIn(true);
              await setUsernameAction(String(result.user.displayName));
              await setPasswordAction("password");
              await setEmailAction(String(result.user.email));
              await setPictureAction(String(result.user.photoURL));
              history.push("/account", { direction: "none" });
            }
          })
          .catch(error => {
            console.log("Login Error - retry again please");
          });
        break;
      case "Twitter":
        setLoadingMessage(`Logging with ${network}`);
        setShowLoading(true);
        break;
      default:
        break;
    }
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (username && password) {
      EmailPasswordLoginAuth(username, password)
        .then(async () => {
          await setIsLoggedIn(true);
          await setUsernameAction(username); // we dont need this anymore, does we?
          await setPasswordAction(password);

          history.push("/account", { direction: "none" });
        })
        .catch(error => {
          alert("Usuario y/o contraseña incorrectos");
          return;
        });
    }
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">
                Email
              </IonLabel>
              <IonInput
                name="username"
                type="text"
                value={username}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={e => setUsername(e.detail.value!)}
                required
              ></IonInput>
            </IonItem>

            {formSubmitted && usernameError && (
              <IonText color="danger">
                <p className="ion-padding-start">Email is required</p>
              </IonText>
            )}

            <IonItem>
              <IonLabel position="stacked" color="primary">
                Password
              </IonLabel>
              <IonInput
                name="password"
                type="password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>

            {formSubmitted && passwordError && (
              <IonText color="danger">
                <p className="ion-padding-start">Password is required</p>
              </IonText>
            )}
          </IonList>

          <IonRow class="ion-justify-content-center">
            <IonCol size="5%">
              <IonButton type="submit" expand="block">
                Login
              </IonButton>
            </IonCol>
            <IonCol size="5%">
              <IonButton routerLink="/signup" color="light" expand="block">
                Signup
              </IonButton>
            </IonCol>
          </IonRow>
        </form>

        <IonLoading
          isOpen={showLoading}
          message={loadingMessage}
          duration={2000}
          spinner="crescent"
          onDidDismiss={() => setShowLoading(false)}
        />
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="auto">
              <IonFabButton
                color="google"
                onClick={() => openSocial("Google+")}
              >
                <IonIcon icon={logoGoogleplus} />
              </IonFabButton>
            </IonCol>
            <IonCol size="auto">
              <IonFabButton
                color="twitter"
                onClick={() => openSocial("Twitter")}
              >
                <IonIcon icon={logoTwitter} />
              </IonFabButton>
            </IonCol>
            <IonCol size="auto">
              <IonFabButton
                color="facebook"
                onClick={() => openSocial("Facebook")}
              >
                <IonIcon icon={logoFacebook} />
              </IonFabButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setPassword,
    setEmail,
    setPicture
  },
  component: Login
});
