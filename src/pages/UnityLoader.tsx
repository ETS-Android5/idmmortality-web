import React from "react";
import { IonPage } from "@ionic/react";
import { connect } from "../data/connect";
import "./css/UnityLoader.scss";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "./games/zpowa.json",
  "./games/UnityLoader.js"
);

const UnityLoader: React.FC = () => {
  return (
    <IonPage id="unityloader-page">
      <Unity unityContent={unityContent} />
    </IonPage>
  );
};

export default connect({
  component: React.memo(UnityLoader),
});
