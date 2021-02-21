import { Plugins, CameraResultType, CameraPhoto, CameraSource, CameraDirection, CameraOptions } from "@capacitor/core";
import React, { useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage } from "@ionic/react";

const { Camera } = Plugins;

interface CameraProps { }

// default options to configure the camera, configured here but ideally the goal is to make this smart by device and type of... environment
const cameraConfig: CameraOptions = {
    quality: 100, // number;
    allowEditing: true, // boolean;
    resultType: CameraResultType.Uri, // base64, Uri, DataUrl ?? chequear diferencias
    saveToGallery: false, // boolean; idealmente no queremos guardar Nada en la galería pero veremos con el tiempo si esto es interesante como proceso de caché o método de guardado acelerado
    width: 1920, // number; Las dimensiones de la imagen deberán de estar reñidas con la capacidad del dispositivo de cámara real
    height: 1080, // number;
    correctOrientation: true, // boolean;
    source: CameraSource.Camera, // Existen dos tipos más de input llamados prom y fotos verificar qué tipo de datos se sacan de estos orígenes
    direction: CameraDirection.Rear, // El tipo de dirección de la cámara será seleccionables según el tipo de dispositivo que estamos usando lo normal es que siempre se utilice la cámara externa ya que estamos capturando entornos que no requieren el uso de cámaras frontales o de selfie sin embargo hay que tener en cuenta que esto puede ser estudiado ble debido a que por entorno sea necesario utilizar esta cámara
    presentationStyle: "fullscreen", // | 'popover';
}

const CameraPage: React.FC<CameraProps> = ({ }) => {
    // save photos in images array
    const images: CameraPhoto[] = [];


    const takePicture = async () => {
        // seria interesante usar props para configurar la camara
        const image = await Camera.getPhoto(cameraConfig);
        images.push(image);
        console.log(images);
    }

    /**
     * Todos
     * 
     * **hacemos este el primero y luego ya nos metemos con los eventos
     * 4. Revisar la interfaz y la librería de cámara para implementar todas las opciones tal y como calidad meta datos resolución y localización 
     * de guardado.
     * 
     * 
     * 1. Chequear todos los eventos de la cámara
     * 2. Controlar la subida de imágenes al servidor y además retornar una respuesta con el resultado del procesado
     * 3. Ajustar el proceso de tomar foto de tal manera que puedan hacerse varias y de manera rápida además el visionado es en el menú
     * 
     */
    return (
        <IonPage id="camera-page">

            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Camera</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent class="ionpadding">
                <IonButton onClick={takePicture}>Take photo</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default React.memo(CameraPage);