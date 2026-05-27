"use client";
import React, { useState, useEffect } from "react";
import styles from "./Admin.module.scss";

const CATEGORIES = [
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Paid Advertising",
  "Web Development",
  "Business Growth",
  "Technology",
  "Case Studies",
  "Other",
];

const EMPTY_FORM = {
  metaTitle: "",
  metaDescription: "",
  title: "",
  category: "",
  author: "",
  excerpt: "",
  content: "",
  tags: "",
  status: "draft",
};

const BlogForm = ({ initialData, onSave, onCancel, saving }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        metaTitle: initialData.metaTitle || "",
        metaDescription: initialData.metaDescription || "",
        title: initialData.title || "",
        category: initialData.category || "",
        author: initialData.author || "",
        excerpt: initialData.excerpt || "",
        content: initialData.content || "",
        tags: initialData.tags || "",
        status: initialData.status || "draft",
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setErrors({});
  }, [initialData]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Blog title is required";
    if (!form.content.trim()) e.content = "Blog content is required";
    if (!form.metaTitle.trim()) e.metaTitle = "Meta title is required";
    if (!form.metaDescription.trim()) e.metaDescription = "Meta description is required";
    if (!form.excerpt.trim()) e.excerpt = "Short excerpt is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.blogForm}>
      {/* SEO Section */}
      <div className={styles.formSection}>
        <h3 className={styles.formSectionTitle}>🔍 SEO & Meta</h3>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Meta Title <span className={styles.required}>*</span>
          </label>
          <input
            name="metaTitle"
            value={form.metaTitle}
            onChange={handleChange}
            className={`${styles.input} ${errors.metaTitle ? styles.inputError : ""}`}
            placeholder="e.g. Top Digital Marketing Agency India | ClickGrows"
            maxLength={60}
          />
          <div className={styles.inputMeta}>
            <span className={styles.charCount}>{form.metaTitle.length}/60</span>
            {errors.metaTitle && <span className={styles.fieldError}>{errors.metaTitle}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Meta Description <span className={styles.required}>*</span>
          </label>
          <textarea
            name="metaDescription"
            value={form.metaDescription}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.metaDescription ? styles.inputError : ""}`}
            placeholder="Brief description shown in Google search results (150–160 characters recommended)"
            rows={3}
            maxLength={160}
          />
          <div className={styles.inputMeta}>
            <span className={styles.charCount}>{form.metaDescription.length}/160</span>
            {errors.metaDescription && <span className={styles.fieldError}>{errors.metaDescription}</span>}
          </div>
        </div>
      </div>

      {/* Blog Details Section */}
      <div className={styles.formSection}>
        <h3 className={styles.formSectionTitle}>📝 Blog Details</h3>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Blog Title <span className={styles.required}>*</span>
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className={`${styles.input} ${errors.title ? styles.inputError : ""}`}
            placeholder="e.g. Why Every Business Needs Digital Marketing in 2025"
          />
          {errors.title && <span className={styles.fieldError}>{errors.title}</span>}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g. ClickGrows Team"
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Short Excerpt <span className={styles.required}>*</span>
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.excerpt ? styles.inputError : ""}`}
            placeholder="A short summary shown on the blogs listing page (1-2 sentences)"
            rows={2}
          />
          {errors.excerpt && <span className={styles.fieldError}>{errors.excerpt}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Tags</label>
          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className={styles.input}
            placeholder="Comma separated: digital marketing, SEO, Google Ads"
          />
          <small className={styles.hint}>Separate tags with commas</small>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className={styles.formSection}>
        <h3 className={styles.formSectionTitle}>✍️ Blog Content</h3>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Full Blog Content <span className={styles.required}>*</span>
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className={`${styles.contentArea} ${errors.content ? styles.inputError : ""}`}
            placeholder="Write your full blog post here. Use double line breaks for new paragraphs."
            rows={20}
          />
          {errors.content && <span className={styles.fieldError}>{errors.content}</span>}
          <small className={styles.hint}>
            Tip: Use **bold text** with double asterisks. Add heading lines starting with ## for sections.
          </small>
        </div>
      </div>

      {/* Publish Settings */}
      <div className={styles.formSection}>
        <h3 className={styles.formSectionTitle}>⚙️ Publish Settings</h3>
        <div className={styles.formGroup}>
          <label className={styles.label}>Status</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="status"
                value="draft"
                checked={form.status === "draft"}
                onChange={handleChange}
              />
              Draft — Not visible to visitors
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="status"
                value="published"
                checked={form.status === "published"}
                onChange={handleChange}
              />
              Published — Visible to everyone
            </label>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className={styles.formActions}>
        <button type="submit" className={styles.btnPrimary} disabled={saving}>
          {saving ? "Saving..." : initialData ? "Update Blog" : "Save Blog"}
        </button>
        <button type="button" className={styles.btnSecondary} onClick={onCancel} disabled={saving}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
