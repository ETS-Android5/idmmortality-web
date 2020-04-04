import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, contacts, map, informationCircle } from 'ionicons/icons';
import DNA from './DNA';
import Experiments from './Experiments';
import ExperimentDetail from './ExperimentDetail';
import Tecnologies from './Tecnologies';
import MapView from './MapView';
import About from './About';

interface QuanticGameProps { }

const QuanticGame: React.FC<QuanticGameProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />
        {/* 
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.        
        */}
        <Route path="/tabs/schedule" render={() => <DNA />} exact={true} />
        <Route path="/tabs/speakers" render={() => <Experiments />} exact={true} />
        <Route path="/tabs/speakers/:id" component={ExperimentDetail} exact={true} />
        <Route path="/tabs/schedule/:id" component={Tecnologies} />
        <Route path="/tabs/speakers/sessions/:id" component={Tecnologies} />
        <Route path="/tabs/map" render={() => <MapView />} exact={true} />
        <Route path="/tabs/about" render={() => <About />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/tabs/schedule">
          <IonIcon icon={calendar} />
          <IonLabel>DNA</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/speakers">
          <IonIcon icon={contacts} />
          <IonLabel>Experiments</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={map} />
          <IonLabel>Tecnologies</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>Messages</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default QuanticGame;