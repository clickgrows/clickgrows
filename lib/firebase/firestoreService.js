import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const saveToFirestore = async (formData) => {
  const docRef = await addDoc(collection(db, "submissions"), {
    ...formData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
