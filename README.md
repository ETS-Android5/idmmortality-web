# Quantic React Conference App

## Issues y TODOs

1 - Añadir i18n - branched
2 - Modificar la carga de tutorial desde el menú o quitarla para que no desaparezca el menú lateral

3 - Setear el modo oscuro por defecto ==> DONE.

4 - Una vez añadido i18n para N idiomas, configurar el signup y el login con firebase.
5 - Modificar el flujo de usuarios y sesiones , a usuarios, proyectos, templates y tags.

6 - Intentar implementar Quantic a nivel puramente funcional con una arquitectura agnostica al frontend, mediante el uso de Stencil.

7- Añadir registro persistente con firebase usando 8 - branched ==> DOING
8- Añadir inicio de sesión con cuentas de otros serivios

9- En el start cargamos correctamente el install y el sw de cacheo etc. Revisar con el nuevo
eject como funciona react scripts y como esto nos permite configurar el sistema de compilación de del fichero build.

10- La estructura lógica de la página está fallando por razones obvias, no hemos estudiado la original y por tanto los flujos de datos y de vistas chocan, ahora que rompiendo hemos aprendido como está estructurado
empezamos a darle sentido al clonado.
También es clave que entendamos como se estructurará la demo tutorial con respecto al contenido html base,
y como se verá reflejado en un juego de demostración propio si creas tu propio proyecto y tu propia template.

11- El slider debe ser mas infografico y así el quantic game podria ser mas una demo con visionado de ejemplo.

12- debido a la complejidad de la demo realizamos una integración sencilla con unity del demo game actual con image capturing y a correr.

## Github Pages Demo - Firabase Hosting Demo

En principio la aplicación viene preparada para que la usemos con firebase, pero ademas me gustaría tenerla replicada en github-pages.

## Configuración Extra Capacitor

{
// The package name for Android and the bundle identifier for iOS.
"appId": "com.company.appname",

// Your app's name.
"appName": "Capacitor Kitchen Sink",

// Sets the directory of your built web assets. This is the directory that will be
// used to run your app in a native environment.
"webDir": "www",

// The JavaScript package manager to use, either npm or yarn.
"npmClient": "npm",

// Whether to use capacitor.js as a bundle that is copied to your web code,
// or require it to be bundled/imported through a typical
// typescript/babel/webpack/rollup workflow.
//
// The starter project sets this to true, but if you're using Ionic or another framework,
// you'll probably want this to be false (default is false)
"bundledWebRuntime": false,

// On Windows, we aren't able to automatically open Android Studio
// without knowing the full path. The default is set to the default
// Android Studio install path, but you may change it manually.
"windowsAndroidStudioPath": "C:\Program Files\Android\Android Studio\bin\studio64.exe",

// Server object contains port and url configurations
"server": {
// You can make the app to load an external url (i.e. to live reload)
"url": "http://192.168.1.33:8100",
// You can configure the local hostname, but it's recommended to keep localhost
// as it allows to run web APIs that require a secure context such as
// navigator.geolocation and MediaDevices.getUserMedia.
"hostname": "app",
// It is possible to configure the local scheme that is used. This can be useful
// when migrating from cordova-plugin-ionic-webview, where the default scheme on iOS is ionic.
"iosScheme": "ionic",
"androidScheme": "http",
// Normally all external URLs are opened in the browser. By setting this option, you tell
// Capacitor to open URLs belonging to these hosts inside its WebView.
"allowNavigation": [
"example.org",
"*.example.org",
"192.0.2.1"
]
},
// User agent of Capacitor WebView for iOS, Android and Electron, unless also declared inside ios, android or electron objects
"overrideUserAgent": "my custom user agent",
// String to append to the original user agent of Capacitor WebView for iOS, Android and Electron,
// unless also declared inside ios, android or electron objects. Only if overrideUserAgent is not set.
"appendUserAgent": "string to append",
// Background color of Capacitor WebView for both iOS and Android unless also declared inside ios or android objects
"backgroundColor": "#ffffffff",
"android": {
// User agent of Capacitor WebView for Android
"overrideUserAgent": "my custom user agent for Android",
// String to append to the original user agent of Capacitor WebView for Android.
"appendUserAgent": "string to append for Android",
// Background color of Capacitor WebView for Android only
"backgroundColor": "#ffffffff",
// On Android, if you are loading the app from a remote/testing server from https
// protocol, you need to enable mixed content mode to allow the WebView to load
// files from different schemes such as capacitor-content:// or capacitor-file://
"allowMixedContent": true,
// Android's default keyboard doesn't allow proper JS key capture
// You can use a simpler keyboard enabling this preference
// Be aware that this keyboard has some problems and limitations
"captureInput": true,
// Enables debugging of web contents (HTML / CSS / JavaScript) loaded into
// any WebViews of this application.
// This flag can be enabled in order to facilitate debugging of web layouts
// and JavaScript code running inside WebViews.
"webContentsDebuggingEnabled": true
},
"ios": {
// User agent of Capacitor WebView for iOS
"overrideUserAgent": "my custom user agent for iOS",
// String to append to the original user agent of Capacitor WebView for iOS.
"appendUserAgent": "string to append for iOS",
// Background color of Capacitor WebView for iOS only
"backgroundColor": "#ffffffff",
// Configure the WebView's UIScrollView's content inset behavior
// Default is never
// Possible values are "automatic", "scrollableAxes", "never" and "always"
// https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior
"contentInset": "always",
// Configure the Swift version to be used for Cordova plugins.
// Default is 5.0
"cordovaSwiftVersion": "4.2",
// Minimum iOS version supported by the project.
// Default is 11.0
"minVersion": "11.3",
// Some Cordova plugins require to configure the linker flags
"cordovaLinkerFlags": ["-ObjC"],
// A Boolean value that determines whether pressing on a link displays a preview of
// the destination for the link.
"allowsLinkPreview": false
},
"electron": {
// User agent of Capacitor WebView for Electron
"overrideUserAgent": "my custom user agent for Electron",
// String to append to the original user agent of Capacitor WebView for Electron.
"appendUserAgent": "string to append for Electron",
}
}

## Camera capture

https://www.joshmorony.com/using-the-camera-api-in-a-pwa-with-capacitor/

The idea is: La idea de este proyecto es aprovechar que estamos en una PWI y que según este artículo podemos emplear el componente de cámara dentro de una pública con capacitor, Es importante entender que esta aplicación es web por tanto de manera ideal lo lógico es que antes de utilizar la aplicación al aceptar el permiso también acepto es la instalación de la app W en el dispositivo.

La idea de esta PWI es básicamente capturar todas las imágenes que irán al servidor de SFM, Y posteriormente todas estas imágenes se procesarán y generarán un archivo clip o menos que servirá para visualizar el espacio fotografiado.