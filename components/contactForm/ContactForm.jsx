"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import useFormSubmit from "../../hooks/useFormSubmit";
import style from "./ContactForm.module.scss";

const INITIAL_STATE = { fullName: "", email: "", phone: "", city: "", subject: "", category: "", message: "" };
const CATEGORIES = [
  { value: "", label: "Select a category" },
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [fieldErrors, setFieldErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const { submitForm, status, error, docId, reset } = useFormSubmit();
  const router = useRouter();

  useEffect(() => {
    if (formRef.current) formRef.current.classList.add(style.visible);
  }, []);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        router.push(`/thankyou?name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(formData.subject)}&docId=${docId || ""}`);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status, router, formData, docId]);

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Enter a valid email address";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.category) errors.category = "Please select a category";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      if (formRef.current) {
        formRef.current.classList.add(style.shake);
        setTimeout(() => formRef.current.classList.remove(style.shake), 500);
      }
      return;
    }
    await submitForm(formData);
  };

  const handleReset = () => { setFormData(INITIAL_STATE); setFieldErrors({}); reset(); };
  const isLoading = status === "loading";

  const ErrorIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className={style.wrapperFormContainer}>
      <div className={style.formContainer} ref={formRef}>
        <div className={style.formBackground}>
          <div className={style.backgroundCircle1}></div>
          <div className={style.backgroundCircle2}></div>
          <div className={style.backgroundDots}></div>
        </div>
        <div className={style.formContainer__header}>
          <h1 className={style.formContainer__title}>Get In <span>Touch</span></h1>
          <p className={style.formContainer__subtitle}>We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        <div className={style.formCard}>
          <form className={style.form} onSubmit={handleSubmit} noValidate>
            <div className={style.fieldRow}>
              <div className={`${style.field} ${focusedField === "fullName" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>Full Name <span className={style.required}>*</span></label>
                <div className={style.field__wrapper}>
                  <input className={`${style.field__input} ${fieldErrors.fullName ? style.hasError : ""}`} type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} onFocus={() => setFocusedField("fullName")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
                </div>
                {fieldErrors.fullName && <span className={style.field__error}><ErrorIcon />{fieldErrors.fullName}</span>}
              </div>
              <div className={`${style.field} ${focusedField === "phone" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>Phone</label>
                <div className={style.field__wrapper}>
                  <input className={style.field__input} type="tel" name="phone" placeholder="+91 99999 99999" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
                </div>
              </div>
            </div>

            <div className={style.fieldRow}>
              <div className={`${style.field} ${focusedField === "email" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>Email Address <span className={style.required}>*</span></label>
                <div className={style.field__wrapper}>
                  <input className={`${style.field__input} ${fieldErrors.email ? style.hasError : ""}`} type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
                </div>
                {fieldErrors.email && <span className={style.field__error}><ErrorIcon />{fieldErrors.email}</span>}
              </div>
              <div className={`${style.field} ${focusedField === "city" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>City</label>
                <div className={style.field__wrapper}>
                  <input className={style.field__input} type="text" name="city" placeholder="Your City" value={formData.city} onChange={handleChange} onFocus={() => setFocusedField("city")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
                </div>
              </div>
            </div>

            <div className={style.fieldRow}>
              <div className={`${style.field} ${focusedField === "category" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>Category <span className={style.required}>*</span></label>
                <div className={style.field__wrapper}>
                  <select className={`${style.field__select} ${fieldErrors.category ? style.hasError : ""}`} name="category" value={formData.category} onChange={handleChange} onFocus={() => setFocusedField("category")} onBlur={() => setFocusedField(null)} disabled={isLoading}>
                    {CATEGORIES.map((c) => (<option key={c.value} value={c.value}>{c.label}</option>))}
                  </select>
                </div>
                {fieldErrors.category && <span className={style.field__error}><ErrorIcon />{fieldErrors.category}</span>}
              </div>
              <div className={`${style.field} ${focusedField === "subject" ? style.fieldFocused : ""}`}>
                <label className={style.field__label}>Subject <span className={style.required}>*</span></label>
                <div className={style.field__wrapper}>
                  <input className={`${style.field__input} ${fieldErrors.subject ? style.hasError : ""}`} type="text" name="subject" placeholder="Brief subject" value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
                </div>
                {fieldErrors.subject && <span className={style.field__error}><ErrorIcon />{fieldErrors.subject}</span>}
              </div>
            </div>

            <div className={`${style.field} ${focusedField === "message" ? style.fieldFocused : ""}`}>
              <label className={style.field__label}>Message <span className={style.required}>*</span></label>
              <div className={style.field__wrapper}>
                <textarea className={`${style.field__textarea} ${fieldErrors.message ? style.hasError : ""}`} name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} disabled={isLoading} />
              </div>
              {fieldErrors.message && <span className={style.field__error}><ErrorIcon />{fieldErrors.message}</span>}
            </div>

            {status === "error" && error && (
              <div className={style.statusBanner + " " + style.statusBannerError}>
                <div className={style.statusBannerContent}>
                  <strong>Submission Failed</strong>
                  <p>{error}</p>
                </div>
              </div>
            )}

            <button type="submit" className={`${style.btnSubmit} ${isLoading ? style.loading : ""}`} disabled={isLoading}>
              {isLoading ? (
                <><span className={style.spinner} /><span>Sending...</span></>
              ) : (
                <><span>Submit</span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
