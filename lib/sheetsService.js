const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export const sendToGoogleSheets = async (formData) => {
  if (!SCRIPT_URL || SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
    throw new Error("Google Script URL is missing in .env.local file.");
  }

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    console.log("✅ Request sent to Google Sheets");
    return { success: true };
  } catch (err) {
    console.error("❌ Sheets fetch failed:", err);
    throw new Error("Failed to reach Google Sheets.");
  }
};
