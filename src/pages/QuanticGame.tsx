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
import { connect } from "../data/connect";

interface OwnProps {}
interface DispatchProps {}
interface QuanticGameProps {}

const QuanticGame: React.FC<QuanticGameProps> = () => {
  return (
    <Fragment>
      <IonContent>Unityection</IonContent>
      <p>
        concluision, las puñeteras tabs que habia antes se renderixzan desde el
        menu por eso esto no carga bien fixear inyectar unity poner un agujero
        para reventar minions.
      </p>
    </Fragment>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: QuanticGame,
});
