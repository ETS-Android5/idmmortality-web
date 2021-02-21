import { Plugins, CameraResultType, CameraPhoto } from "@capacitor/core";
import React, { useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage } from "@ionic/react";

const { Camera } = Plugins;

interface CameraProps {}

const CameraPage: React.FC<CameraProps> = ({ }) => {
    const images: CameraPhoto[] = [];

    const takePicture = async () => {
        const image = await Camera.getPhoto({
            resultType: CameraResultType.Uri
        });
        images.push(image);
        console.log(images);
    }

    /**
     * Todos
     * 1. Chequear todos los eventos de la cámara
     * 2. Controlar la subida de imágenes al servidor y además retornar una respuesta con el resultado del procesado
     * 3. Ajustar el proceso de tomar foto de tal manera que puedan hacerse varias y de manera rápida además el visionado es en el menú
     */
    return (
        <IonPage id="camera-page">

        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ionpadding">
            <IonButton onClick={takePicture}>Take photo</IonButton>
        </IonContent>
        </IonPage>
    );
}

export default React.memo(CameraPage);