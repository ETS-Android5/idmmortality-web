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
  IonText
} from "@ionic/react";
import "./css/Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setPassword,
  setEmail
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";
import { getAuth } from "../data/firebaseAuth";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setPassword: typeof setPassword;
  setEmail: typeof setEmail;
}

interface SignupProps extends OwnProps, DispatchProps {}

const Signup: React.FC<SignupProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
  setPassword: setPasswordAction
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  /* 
    visto lo visto esta funcion no nos vale para signup inicialmente, sino que si alguien hace signup con datos de login
    pues si son existentes lo logueamos y sino existen cuenta nueva.
  */
  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!email) {
      setEmailError(true);
    }

    if (username && password && email) {
      /*
       comprobar si username y password, son parte de firebase user-password
       ademas lo suyo es añadir un email, para poder gestionar el registro correcamente
      */
      await setIsLoggedIn(true); // no usariamos setIsLoggedIn, usariamos un setSignedUp
      await setUsernameAction(username); // no usariamos esto, sino un setConfirmAccount con los datos del signup
      await setEmailAction(email);
      await setPasswordAction(password);
      getAuth();
      /**
       * Una vez hemos registradoy pedido la confirmación usaremos un ternario
       *  Quieres confirmar tu cuenta ? push gmail.com : push cuentadeinvitado.tab
       */
      history.push("/profile", { direction: "none" });
    }
  };

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={signup}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">
                Email
              </IonLabel>
              <IonInput
                name="email"
                type="email"
                value={email}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={e => {
                  setEmail(e.detail.value!);
                  setEmailError(false);
                }}
                required
              ></IonInput>
            </IonItem>
            {formSubmitted && emailError && (
              <IonText color="danger">
                <p className="ion-padding-start">Email is required</p>
              </IonText>
            )}

            <IonItem>
              <IonLabel position="stacked" color="primary">
                Username
              </IonLabel>
              <IonInput
                name="username"
                type="text"
                value={username}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={e => {
                  setUsername(e.detail.value!);
                  setUsernameError(false);
                }}
                required
              ></IonInput>
            </IonItem>

            {formSubmitted && usernameError && (
              <IonText color="danger">
                <p className="ion-padding-start">Username is required</p>
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
                onIonChange={e => {
                  setPassword(e.detail.value!);
                  setPasswordError(false);
                }}
              ></IonInput>
            </IonItem>

            {formSubmitted && passwordError && (
              <IonText color="danger">
                <p className="ion-padding-start">Password is required</p>
              </IonText>
            )}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">
                Create
              </IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setPassword,
    setEmail
  },
  component: Signup
});
