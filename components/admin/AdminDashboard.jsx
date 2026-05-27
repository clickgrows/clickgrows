"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { logoutAdmin } from "../../lib/firebase/authService";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} from "../../lib/firebase/blogService";
import BlogForm from "./BlogForm";
import styles from "./Admin.module.scss";

const AdminDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [view, setView] = useState("list"); // "list" | "create" | "edit"
  const [editingBlog, setEditingBlog] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState(null);

  // Auth guard
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin/login");
    }
  }, [user, authLoading, router]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchBlogs = useCallback(async () => {
    setBlogsLoading(true);
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (err) {
      showToast("Failed to load blogs", "error");
    } finally {
      setBlogsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) fetchBlogs();
  }, [user, fetchBlogs]);

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/admin/login");
  };

  const handleSave = async (formData) => {
    setSaving(true);
    try {
      if (editingBlog) {
        await updateBlog(editingBlog.id, formData);
        showToast("Blog updated successfully!");
      } else {
        await addBlog(formData);
        showToast("Blog created successfully!");
      }
      setView("list");
      setEditingBlog(null);
      await fetchBlogs();
    } catch (err) {
      showToast("Failed to save blog. Please try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setView("edit");
  };

  const handleDeleteConfirm = async (id) => {
    try {
      await deleteBlog(id);
      showToast("Blog deleted.");
      setDeleteConfirm(null);
      await fetchBlogs();
    } catch (err) {
      showToast("Failed to delete blog.", "error");
    }
  };

  const handleCancel = () => {
    setView("list");
    setEditingBlog(null);
  };

  if (authLoading || !user) {
    return (
      <div className={styles.dashboardPage}>
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      {/* Toast */}
      {toast && (
        <div className={`${styles.toast} ${styles[`toast--${toast.type}`]}`}>
          {toast.msg}
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Delete Blog?</h3>
            <p>This action cannot be undone.</p>
            <div className={styles.modalActions}>
              <button
                className={styles.btnDanger}
                onClick={() => handleDeleteConfirm(deleteConfirm)}
              >
                Yes, Delete
              </button>
              <button
                className={styles.btnSecondary}
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <span>ClickGrows</span>
          <small>Admin</small>
        </div>
        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navItem} ${view === "list" ? styles.navItemActive : ""}`}
            onClick={() => { setView("list"); setEditingBlog(null); }}
          >
            📝 All Blogs
          </button>
          <button
            className={`${styles.navItem} ${view === "create" ? styles.navItemActive : ""}`}
            onClick={() => { setView("create"); setEditingBlog(null); }}
          >
            ✏️ New Blog
          </button>
        </nav>
        <div className={styles.sidebarFooter}>
          <p className={styles.adminEmail}>{user.email}</p>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.dashboardMain}>
        {/* Blog List */}
        {view === "list" && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>All Blog Posts</h2>
              <button
                className={styles.btnPrimary}
                onClick={() => { setView("create"); setEditingBlog(null); }}
              >
                + New Blog
              </button>
            </div>

            {blogsLoading ? (
              <p className={styles.loadingText}>Loading blogs...</p>
            ) : blogs.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No blogs yet. Create your first one!</p>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setView("create")}
                >
                  Create Blog
                </button>
              </div>
            ) : (
              <div className={styles.blogTable}>
                <div className={styles.tableHeader}>
                  <span>Title</span>
                  <span>Status</span>
                  <span>Category</span>
                  <span>Actions</span>
                </div>
                {blogs.map((blog) => (
                  <div key={blog.id} className={styles.tableRow}>
                    <div className={styles.blogTitle}>
                      <strong>{blog.title}</strong>
                      <small className={styles.blogSlug}>/{blog.slug}</small>
                    </div>
                    <span className={`${styles.badge} ${styles[`badge--${blog.status}`]}`}>
                      {blog.status}
                    </span>
                    <span className={styles.blogCategory}>{blog.category || "—"}</span>
                    <div className={styles.tableActions}>
                      <button
                        className={styles.btnEdit}
                        onClick={() => handleEdit(blog)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDelete}
                        onClick={() => setDeleteConfirm(blog.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Create / Edit Form */}
        {(view === "create" || view === "edit") && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>{view === "edit" ? "Edit Blog Post" : "Create New Blog Post"}</h2>
            </div>
            <BlogForm
              initialData={editingBlog}
              onSave={handleSave}
              onCancel={handleCancel}
              saving={saving}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
