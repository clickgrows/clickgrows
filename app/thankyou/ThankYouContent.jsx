"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./Thankyou.module.scss";

const ThankYouContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fullName = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const subject = searchParams.get("subject") || "";
  const docId = searchParams.get("docId") || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.thankYouContainer}>
      <div className={style.thankYouCard}>
        <div className={style.successIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className={style.title}>Thank You!</h1>
        <p className={style.message}>
          Your message has been successfully submitted. We'll get back to you within 24 hours.
        </p>
        {fullName && (
          <div className={style.summary}>
            <h3>Submission Summary:</h3>
            <p><strong>Name:</strong> {fullName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            {docId && <p className={style.reference}><strong>Reference ID:</strong> {docId}</p>}
          </div>
        )}
        <div className={style.buttonGroup}>
          <button onClick={() => router.push("/")} className={style.homeButton}>Go to Homepage</button>
          <button onClick={() => router.push("/contact-us")} className={style.againButton}>Submit Another Query</button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouContent;
