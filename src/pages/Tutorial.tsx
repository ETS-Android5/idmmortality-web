import React, { useState, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonSlides,
  IonSlide,
  IonIcon,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { setHasSeenTutorial } from "../data/user/user.actions";
import "./css/Tutorial.scss";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
}

interface TutorialProps extends OwnProps, DispatchProps {}

const Tutorial: React.FC<TutorialProps> = ({ history, setHasSeenTutorial }) => {
  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);

  const startApp = async () => {
    await setHasSeenTutorial(true);
    history.push("/quanticgame");
  };

  const handleSlideChangeStart = () => {
    slideRef.current!.isEnd().then((isEnd) => setShowSkip(!isEnd));
  };

  return (
    <IonPage id="tutorial-page">
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="end">
            {showSkip && (
              <IonButton color="primary" onClick={startApp}>
                Skip
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides
          ref={slideRef}
          onIonSlideWillChange={handleSlideChangeStart}
          pager={false}
        >
          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-1.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">
              Welcome to <b>QUANTIC</b>
            </h2>
            <p>
              The <b>Quantic</b> app is a practical preview of the best
              augmented reality tool in action, and a repository of proper
              projects and templates.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-2.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">What is QUANTIC?</h2>
            <p>
              <b>Quantic</b> is an open source SDK that enables developers to
              build high quality mobile apps with web technologies like HTML,
              CSS, and JavaScript embeding a whole <b>UNITY</b> scene in a
              augmented reality experience using <b>ARJS</b>.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-3.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">What is QUANTIC Projects?</h2>
            <p>
              <b>Quantic Projects</b> is a set of worlds and games availables in
              QUANTIC that brings a totally new level of environment development
              to web mobile, specially for dev teams which wants to integrate
              augmented reality in the browser.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-3.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">What is QUANTIC Templates?</h2>
            <p>
              <b>Quantic Templates</b> is a powerful set of exporting wrappers
              and features availables in QUANTIC for the projects, for include
              wasm boosters, offline PWA experience, tensorflow integration and
              awesome extras for web mobile pwa games that are focus on WebXR.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-4.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">Ready to create new worlds to Play?</h2>
            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
        <p>
          <a href="https://twitter.com/arjs">#MadeWithARJS</a>
        </p>
        <p>
          <a href="https://unity.com">#MadeWithUNITY</a>
        </p>
        <p>
          <a href="https://ionicframework.com">#MadeWithIONIC</a>
        </p>
        <hr />
        <p>
          <a href="https://buckdevment.wordpress.com">#MadeByBuckDevMent</a>{" "}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setHasSeenTutorial,
  },
  component: Tutorial,
});
