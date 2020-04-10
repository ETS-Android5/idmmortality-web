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
import { setUsername } from "../data/user/user.actions";
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
}

interface ProjectsProps extends OwnProps, StateProps, DispatchProps {}

const Projects: React.FC<ProjectsProps> = () => {
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
      <IonContent>Projects from user</IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    username: state.user.username,
  }),
  mapDispatchToProps: {
    setUsername,
  },
  component: Projects,
});
