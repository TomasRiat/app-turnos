import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC6JLNOR4vq0MH7W5RuF__It-AHm5e-cw8",
    authDomain: "arka-turnos.firebaseapp.com",
    projectId: "arka-turnos",
    storageBucket: "arka-turnos.appspot.com",
    messagingSenderId: "367483415746",
    appId: "1:367483415746:web:9e90ec26fc687da8b3df5b",
    measurementId: "G-SFWLSJ4C5J"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;