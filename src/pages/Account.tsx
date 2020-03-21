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
  IonAlert
} from "@ionic/react";
import "./css/Account.scss";
import { setUsername, setEmail, setPassword } from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  username?: string;
  email?: string;
  password?: string;
}

interface DispatchProps {
  setUsername: typeof setUsername;
  setPassword: typeof setPassword;
  setEmail: typeof setEmail;
}

interface AccountProps extends OwnProps, StateProps, DispatchProps {}

const Account: React.FC<AccountProps> = ({
  setUsername,
  setEmail,
  setPassword,
  username,
  email,
  password
}) => {
  // como showAlert es un hook que tira de booleanos , hacemos el check sencillo con clicked y alert
  const [showAlert, setShowAlert] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {username && email && password && (
          <div className="ion-padding-top ion-text-center">
            <img
              src="https://www.gravatar.com/avatar?d=mm&s=140"
              alt="avatar"
            />
            <h2>{username}</h2>
            <IonList inset>
              <IonItem onClick={() => clicked("Update Picture")}>
                Update Picture
              </IonItem>
              <IonItem onClick={() => clicked(email)}>Change Email</IonItem>
              <IonItem onClick={() => clicked(username)}>
                Change Username
              </IonItem>
              <IonItem onClick={() => clicked(password)}>
                Change Password
              </IonItem>
              <IonItem routerLink="/support" routerDirection="none">
                Support
              </IonItem>
              <IonItem routerLink="/logout" routerDirection="none">
                Logout
              </IonItem>
            </IonList>
          </div>
        )}
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header="Change Field"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: data => {
              setUsername(data.username);
              setEmail(data.email);
              setPassword(data.password);
            }
          }
        ]}
        inputs={[
          {
            type: "text",
            name: "username",
            value: username,
            placeholder: "username"
          }
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: state => ({
    username: state.user.username,
    email: state.user.email,
    password: state.user.password
  }),
  mapDispatchToProps: {
    setUsername,
    setPassword,
    setEmail
  },
  component: Account
});
