import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4bF_MWelq8p8cCeXt4cj56y_Miyksk-w",

  authDomain: "ecommerce-e9ae7.firebaseapp.com",

  projectId: "ecommerce-e9ae7",

  storageBucket: "ecommerce-e9ae7.appspot.com",

  messagingSenderId: "570106192584",

  appId: "1:570106192584:web:79a5e0e00d848caa157bfd",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const FirebaseHandler = {
  handlePagar: async (datos) => {
    try {
      await addDoc(collection(db, "usuarios"), {
        ...datos,
        timestamp: serverTimestamp(),
      });
      alert("Pedido realizado correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      alert(
        "Hubo un error al guardar los datos. Por favor, inténtalo de nuevo."
      );
    }
  },
};

export default FirebaseHandler;
export { db };
