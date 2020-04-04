import React, { Fragment } from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonContent,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { calendar, contacts, map, informationCircle } from "ionicons/icons";
import DNA from "./DNA";
import Experiments from "./Experiments";
import Tecnologies from "./Tecnologies";
import Messages from "./Messages";

interface QuanticGameProps {}

const QuanticGame: React.FC<QuanticGameProps> = () => {
  return (
    <Fragment>
      <IonContent>QuanticGame-Messages</IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/messages" />
          {/* 
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.        
        */}
          <Route path="/tabs/dna" render={() => <DNA />} exact={true} />
          <Route
            path="/tabs/experiments"
            render={() => <Experiments />}
            exact={true}
          />
          <Route
            path="/tabs/tecnologies"
            render={() => <Tecnologies />}
            exact={true}
          />
          <Route
            path="/tabs/messages"
            render={() => <Messages />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="dna" href="/tabs/dna">
            <IonIcon icon={calendar} />
            <IonLabel>DNA</IonLabel>
          </IonTabButton>
          <IonTabButton tab="experiments" href="/tabs/experiments">
            <IonIcon icon={contacts} />
            <IonLabel>Experiments</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tecnologies" href="/tabs/tecnologies">
            <IonIcon icon={map} />
            <IonLabel>Tecnologies</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/tabs/messages">
            <IonIcon icon={informationCircle} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </Fragment>
  );
};

export default QuanticGame;
