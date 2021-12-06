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
      <IonContent>Trinity</IonContent>
    </Fragment>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: QuanticGame,
});
