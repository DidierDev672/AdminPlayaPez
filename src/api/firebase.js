import settings from "./settings";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(settings);
export const db = getFirestore(app);
