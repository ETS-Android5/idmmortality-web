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
  IonToggle,
} from "@ionic/react";
import {
  hammer,
  help,
  logIn,
  logOut,
  map,
  person,
  personAdd,
  compass,
  globe,
  information,
  contacts,
  informationCircle,
} from "ionicons/icons";
import React, { useState } from "react";
import { connect } from "../data/connect";
import { RouteComponentProps, withRouter } from "react-router";
import { setDarkMode } from "../data/user/user.actions";

const routes = {
  appPages: [{ title: "Quantic-Game-Route?", path: "/tabs", icon: globe }],
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
  ],
  loggedOutProjectPages: [
    { title: "Community Projects", path: "/login", icon: globe },
    { title: "Quantic Games", path: "/login", icon: help },
    { title: "Information", path: "/login", icon: information },
  ],
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

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps {}

const Menu: React.FC<MenuProps> = ({
  darkMode,
  history,
  isAuthenticated,
  setDarkMode,
}) => {
  const [disableMenu, setDisableMenu] = useState(false);

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
    <IonMenu type="overlay" disabled={disableMenu} contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quantic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonListHeader>Welcome</IonListHeader>
          <IonItem
            onClick={() => {
              setDisableMenu(false);
              history.push("/tutorial");
            }}
          >
            <IonIcon slot="start" icon={hammer} />
            Quantic Tutorial
          </IonItem>
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

/**
 *  <IonItem>
            <IonLabel>Dark Theme</IonLabel>
            <IonToggle
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            />
          </IonItem>
 */

/**
 * Seguir con la parte de signup y login real de firebase,  la parte visual de darkmode y las cuentas solo
 * se puede toquitear cuando realmente tenga dominado mas el codigo de html react tsx e ionic.
 * 
 * Por ahora buscamos funcionalidad.
 * 
 * No tutorial shit
 *  <IonList>
          <IonListHeader>Tutorial</IonListHeader>
          <IonItem
            onClick={() => {
              setDisableMenu(false);
              history.push("/tutorial");
            }}
          >
            <IonIcon slot="start" icon={hammer} />
            Show Tutorial
          </IonItem>
        </IonList>
 * 
 * DARRK MODE ON HEADER
 * <IonList>
          <IonItem>
            <IonLabel>Dark Theme</IonLabel>
            <IonToggle
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            />
          </IonItem>
        </IonList>
 * 
 * PAGES when firebase templates and apps were available
 *  <IonList>
          <IonListHeader>Navigate</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
 * 
 * 
 * 
 * 
 * 
 */
