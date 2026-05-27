"use client";
import { useState } from "react";
import { saveToFirestore } from "../lib/firebase/firestoreService";
import { sendToGoogleSheets } from "../lib/sheetsService";

const useFormSubmit = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [docId, setDocId] = useState(null);

  const submitForm = async (formData) => {
    setStatus("loading");
    setError(null);

    try {
      console.log("📦 Saving to Firestore...");
      const id = await saveToFirestore(formData);
      setDocId(id);

      await sendToGoogleSheets(formData);

      setStatus("success");
    } catch (err) {
      console.error("❌ Error caught:", err.message, err);
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
    setDocId(null);
  };

  return { submitForm, status, error, docId, reset };
};

export default useFormSubmit;
