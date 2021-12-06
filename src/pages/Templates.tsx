import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover
} from "@ionic/react";
import "./css/Templates.scss";
import { calendar, pin, more } from "ionicons/icons";


interface TemplatesProps {}

const Templates: React.FC<TemplatesProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();

  const presentPopover = (e: React.MouseEvent) => {
  
  };
  const conferenceDate = "2047-05-17";

  return (
    <IonPage id="about-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>ExperimentsDetails</IonTitle>
          <IonButtons slot="end">
            <IonButton icon-only onClick={presentPopover}>
              <IonIcon slot="icon-only" icon={more}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="about-header">
          <img src="assets/img/ionic-logo-white.svg" alt="ionic logo" />
        </div>
        <div className="about-info">
          <h4 className="ion-padding-start">Ionic Conference</h4>

          <IonList lines="none">
            <IonItem>
              <IonIcon icon={calendar} slot="start"></IonIcon>
              <IonLabel position="stacked">Date</IonLabel>
              <IonDatetime
                displayFormat="MMM DD, YYYY"
                max="2056"
                value={conferenceDate}
              ></IonDatetime>
            </IonItem>

            <IonItem>
              <IonIcon icon={pin} slot="start"></IonIcon>
              <IonLabel position="stacked">Location</IonLabel>
              <IonSelect>
                <IonSelectOption value="madison" selected>
                  Madison, WI
                </IonSelectOption>
                <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <p className="ion-padding-start ion-padding-end">
            The Ionic Conference is a one-day conference featuring talks from
            the Ionic team. It is focused on Ionic applications being built with
            Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,
            Angular concepts, Webpack, Sass, and many other technologies used in
            Ionic 2. Tickets are completely sold out, and we’re expecting more
            than 1000 developers – making this the largest Ionic conference
            ever!
          </p>
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default React.memo(Templates);
