"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPublishedBlogs } from "../../lib/firebase/blogService";
import styles from "./Blogs.module.scss";

const BlogsListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getPublishedBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.blogsHero}>
          <span className={styles.badge}>Our Blog</span>
          <h1 className={styles.heroTitle}>Insights & Strategies</h1>
          <p className={styles.heroSubtitle}>
            Tips, tactics and deep dives on digital marketing, paid advertising,
            and growing your business online.
          </p>
        </div>

        {/* Content */}
        {loading && (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>Loading blogs...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorState}>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No blogs published yet</h3>
            <p>Check back soon for articles and insights from our team.</p>
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className={styles.blogsGrid}>
            {blogs.map((blog) => (
              <article key={blog.id} className={styles.blogCard}>
                <div className={styles.cardContent}>
                  {blog.category && (
                    <span className={styles.cardCategory}>{blog.category}</span>
                  )}
                  <h2 className={styles.cardTitle}>
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                  <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardAuthor}>
                      {blog.author || "ClickGrows Team"}
                    </span>
                    {blog.createdAt && (
                      <span className={styles.cardDate}>
                        {formatDate(blog.createdAt)}
                      </span>
                    )}
                  </div>
                  <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsListing;
