"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogBySlug } from "../../lib/firebase/blogService";
import styles from "./Blogs.module.scss";

// Basic content renderer — handles **bold**, ## headings, and line breaks
const renderContent = (content) => {
  if (!content) return null;
  const paragraphs = content.split(/\n\n+/);

  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Heading: ## Heading Text
    if (trimmed.startsWith("## ")) {
      return <h2 key={i} className={styles.contentH2}>{trimmed.slice(3)}</h2>;
    }

    if (trimmed.startsWith("# ")) {
      return <h1 key={i} className={styles.contentH1}>{trimmed.slice(2)}</h1>;
    }

    // Bullet list: lines starting with - or *
    const lines = trimmed.split("\n");
    const isList = lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
    if (isList) {
      return (
        <ul key={i} className={styles.contentList}>
          {lines.map((line, j) => (
            <li key={j}>{formatInline(line.replace(/^[-*]\s/, ""))}</li>
          ))}
        </ul>
      );
    }

    // Regular paragraph
    return <p key={i} className={styles.contentPara}>{formatInline(trimmed)}</p>;
  });
};

// Bold via **text**
const formatInline = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogBySlug(slug);
        if (!data) {
          setNotFound(true);
        } else {
          setBlog(data);
          // Update page meta dynamically
          if (data.metaTitle) document.title = data.metaTitle;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc && data.metaDescription) {
            metaDesc.setAttribute("content", data.metaDescription);
          }
        }
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className={styles.blogsSection}>
        <div className={styles.container}>
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>Loading article...</p>
          </div>
        </div>
      </section>
    );
  }

  if (notFound || !blog) {
    return (
      <section className={styles.blogsSection}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h2>Article Not Found</h2>
            <p>This blog post doesn&apos;t exist or may have been removed.</p>
            <Link href="/blogs" className={styles.backLink}>
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const tags = blog.tags
    ? blog.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        {/* Back link */}
        <Link href="/blogs" className={styles.backLink}>
          ← Back to all blogs
        </Link>

        <article className={styles.articleWrapper}>
          {/* Header */}
          <header className={styles.articleHeader}>
            {blog.category && (
              <span className={styles.badge}>{blog.category}</span>
            )}
            <h1 className={styles.articleTitle}>{blog.title}</h1>

            <div className={styles.articleMeta}>
              <span className={styles.cardAuthor}>
                {blog.author || "ClickGrows Team"}
              </span>
              {blog.createdAt && (
                <span className={styles.cardDate}>{formatDate(blog.createdAt)}</span>
              )}
            </div>

            {blog.excerpt && (
              <p className={styles.articleExcerpt}>{blog.excerpt}</p>
            )}
          </header>

          {/* Content */}
          <div className={styles.articleContent}>
            {renderContent(blog.content)}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className={styles.tagList}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
