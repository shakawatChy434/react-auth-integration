import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse. config";


const initAuthentication = () => {
    initializeApp(firebaseConfig);
};



export default initAuthentication;