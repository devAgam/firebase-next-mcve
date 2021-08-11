import firebaseClient from "firebase/app";
import "firebase/auth";
const CLIENT_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  try {
    firebaseClient.initializeApp(CLIENT_CONFIG);
    (window as any).firebase = firebaseClient;
  } catch (error) {
    throw error;
  }
}

export { firebaseClient };
