import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonAlert,
} from "@ionic/react";
import "./css/Projects.scss";
import {
  setUsername,
  setEmail,
  setPassword,
  setPicture,
  logoutUser,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  username?: string;
  email?: string;
  password?: string;
  picture?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
  setPassword: typeof setPassword;
  setEmail: typeof setEmail;
  setPicture: typeof setPicture;
}

interface ProjectsProps extends OwnProps, StateProps, DispatchProps {}

const Projects: React.FC<ProjectsProps> = ({
  setUsername,
  setEmail,
  setPassword,
  setPicture,
  username,
  email,
  password,
  picture,
}) => {
  // como showAlert es un hook que tira de booleanos , hacemos el check sencillo con clicked y alert
  const [showAlertUsername, setShowAlertUsername] = useState(false);
  const [showAlertEmail, setShowAlertEmail] = useState(false);
  const [showAlertPassword, setShowAlertPassword] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  return (
    <IonPage id="projects-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {username && email && password && (
          <div className="ion-padding-top ion-text-center">
            <img src={picture || "assets/img/appicon.svg"} alt="avatar" />
            <h2>{username}</h2>
            <IonList inset>
              <IonItem onClick={() => alert(picture)}>Update Picture</IonItem>
              <IonItem onClick={() => setShowAlertEmail(true)}>
                Change Email
              </IonItem>
              <IonItem onClick={() => setShowAlertUsername(true)}>
                Change Username
              </IonItem>
              <IonItem onClick={() => setShowAlertPassword(true)}>
                Change Password
              </IonItem>
              <IonItem routerLink="/support" routerDirection="none">
                Support
              </IonItem>
              <IonItem
                routerLink="/logout"
                routerDirection="none"
                onClick={logoutUser()}
              >
                Logout
              </IonItem>
            </IonList>
          </div>
        )}
      </IonContent>
      <IonAlert
        isOpen={showAlertUsername}
        header="Change Username"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: () => {
              setUsername(username);
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "username",
            value: username,
            placeholder: "username",
          },
        ]}
        onDidDismiss={() => setShowAlertUsername(false)}
      />
      <IonAlert
        isOpen={showAlertEmail}
        header="Change Email"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: () => {
              setEmail(email);
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "Email",
            value: email,
            placeholder: "Email",
          },
        ]}
        onDidDismiss={() => setShowAlertEmail(false)}
      />
      <IonAlert
        isOpen={showAlertPassword}
        header="Change Field"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: () => {
              setPassword(password);
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "password",
            value: password,
            placeholder: "password",
          },
        ]}
        onDidDismiss={() => setShowAlertPassword(false)}
      />
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    username: state.user.username,
    email: state.user.email,
    password: state.user.password,
    picture: state.user.picture,
  }),
  mapDispatchToProps: {
    setUsername,
    setPassword,
    setEmail,
    setPicture,
  },
  component: Projects,
});
