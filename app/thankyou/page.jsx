import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata = { title: "Thank You - ClickGrows" };

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
