"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogBySlug } from "../../lib/firebase/blogService";
import styles from "./Blogs.module.scss";

// Inline formatting: **bold**, *italic*, `code`
const formatInline = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
    return part;
  });
};

const isHorizontalRule = (line) => /^[-*_]{3,}\s*$/.test(line.trim());
const isNumberedItem  = (line) => /^\d+[.)]\s/.test(line.trim());
const isBulletItem    = (line) => /^[-*•]\s/.test(line.trim());
const stripBullet     = (line) => line.trim().replace(/^[-*•]\s/, "");
const stripNumbered   = (line) => line.trim().replace(/^\d+[.)]\s/, "");

const renderContent = (content) => {
  if (!content) return null;

  const normalized = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) { i++; continue; }

    // Horizontal rule — skip, don't render dashes
    if (isHorizontalRule(trimmed)) { i++; continue; }

    // H1: # Heading
    if (/^#\s/.test(trimmed)) {
      elements.push(
        <h1 key={i} className={styles.contentH1}>
          {formatInline(trimmed.replace(/^#\s/, ""))}
        </h1>
      );
      i++; continue;
    }

    // H2: ## Heading
    if (/^##\s/.test(trimmed)) {
      elements.push(
        <h2 key={i} className={styles.contentH2}>
          {formatInline(trimmed.replace(/^##\s/, ""))}
        </h2>
      );
      i++; continue;
    }

    // H3: ### Heading
    if (/^###\s/.test(trimmed)) {
      elements.push(
        <h3 key={i} className={styles.contentH3}>
          {formatInline(trimmed.replace(/^###\s/, ""))}
        </h3>
      );
      i++; continue;
    }

    // H4: #### Heading
    if (/^####\s/.test(trimmed)) {
      elements.push(
        <h4 key={i} className={styles.contentH4}>
          {formatInline(trimmed.replace(/^####\s/, ""))}
        </h4>
      );
      i++; continue;
    }

    // H5: ##### Heading
    if (/^#####\s/.test(trimmed)) {
      elements.push(
        <h5 key={i} className={styles.contentH5}>
          {formatInline(trimmed.replace(/^#####\s/, ""))}
        </h5>
      );
      i++; continue;
    }

    // H6: ###### Heading
    if (/^######\s/.test(trimmed)) {
      elements.push(
        <h6 key={i} className={styles.contentH6}>
          {formatInline(trimmed.replace(/^######\s/, ""))}
        </h6>
      );
      i++; continue;
    }

    // Bold-only line → treated as H3 (e.g. **Section Title**)
    if (/^\*\*[^*]+\*\*[:.]?\s*$/.test(trimmed)) {
      elements.push(
        <h3 key={i} className={styles.contentH3}>
          {trimmed.replace(/\*\*/g, "")}
        </h3>
      );
      i++; continue;
    }

    // Numbered list
    if (isNumberedItem(trimmed)) {
      const items = [];
      while (i < lines.length && isNumberedItem(lines[i].trim())) {
        items.push(lines[i].trim());
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className={styles.contentOL}>
          {items.map((item, j) => (
            <li key={j}>{formatInline(stripNumbered(item))}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Bullet list
    if (isBulletItem(trimmed)) {
      const items = [];
      while (i < lines.length && isBulletItem(lines[i].trim())) {
        items.push(lines[i].trim());
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className={styles.contentList}>
          {items.map((item, j) => (
            <li key={j}>{formatInline(stripBullet(item))}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Blockquote: > text
    if (/^>\s/.test(trimmed)) {
      elements.push(
        <blockquote key={i} className={styles.contentBlockquote}>
          {formatInline(trimmed.replace(/^>\s/, ""))}
        </blockquote>
      );
      i++; continue;
    }

    // Regular paragraph
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !isHorizontalRule(lines[i].trim()) &&
      !/^#{1,6}\s/.test(lines[i].trim()) &&
      !isBulletItem(lines[i].trim()) &&
      !isNumberedItem(lines[i].trim()) &&
      !/^>\s/.test(lines[i].trim()) &&
      !/^\*\*[^*]+\*\*[:.]?\s*$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      elements.push(
        <p key={`p-${i}`} className={styles.contentPara}>
          {paraLines.map((l, j) => (
            <React.Fragment key={j}>
              {j > 0 && <br />}
              {formatInline(l)}
            </React.Fragment>
          ))}
        </p>
      );
    }
  }

  return elements;
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
        <Link href="/blogs" className={styles.backLink}>
          ← Back to all blogs
        </Link>

        <article className={styles.articleWrapper}>
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

          <div className={styles.articleContent}>
            {renderContent(blog.content)}
          </div>

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
