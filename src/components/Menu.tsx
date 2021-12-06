import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  help,
  logIn,
  logOut,
  map,
  person,
  personAdd,
  compass,
  globe,
  information,
  camera,
} from "ionicons/icons";
import React, { useState } from "react";
import { connect } from "../data/connect";
import { RouteComponentProps, withRouter } from "react-router";
import { setDarkMode } from "../data/user/user.actions";

const routes = {
  appPages: [{ title: "First Steps", path: "/tabs", icon: globe },
  { title: "Camera", path: "/camera", icon: camera }
  ],
  loggedInPages: [
    { title: "Account", path: "/account", icon: person },
    { title: "Support", path: "/support", icon: help },
    { title: "Logout", path: "/logout", icon: logOut },
  ],
  loggedOutPages: [
    { title: "Login", path: "/login", icon: logIn },
    { title: "Support", path: "/support", icon: help },
    { title: "Signup", path: "/signup", icon: personAdd },
  ],
  loggedInProjectPages: [
    { title: "My Community Projects", path: "/projects", icon: compass },
    { title: "Games", path: "/games", icon: help },
    { title: "Templates", path: "/templates", icon: map },
    { title: "Community Projects", path: "/projects", icon: globe },
    { title: "Information", path: "/information", icon: information },
  ],
  loggedOutProjectPages: [ ],
};

interface Pages {
  title: string;
  path: string;
  icon: { ios: string; md: string };
  routerDirection?: string;
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode;
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps { }

const Menu: React.FC<MenuProps> = ({
  isAuthenticated,
  setDarkMode,
}) => {
  

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button routerLink={p.path} routerDirection="none">
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>IDMMORTALITY - ONLINE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonListHeader>Welcome</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList>
          <IonListHeader>Projects</IonListHeader>
          {isAuthenticated
            ? renderlistItems(routes.loggedInProjectPages)
            : renderlistItems(routes.loggedOutProjectPages)}
        </IonList>
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated
            ? renderlistItems(routes.loggedInPages)
            : renderlistItems(routes.loggedOutPages)}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
  }),
  mapDispatchToProps: {
    setDarkMode,
  },
  component: withRouter(Menu),
});