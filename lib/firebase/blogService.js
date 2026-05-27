import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";

const BLOGS_COLLECTION = "blogs";

// Create a URL-friendly slug from title
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

// Add new blog post
export const addBlog = async (blogData) => {
  const slug = createSlug(blogData.title);
  const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
    ...blogData,
    slug,
    status: blogData.status || "draft",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
};

// Update existing blog post
export const updateBlog = async (id, blogData) => {
  const slug = createSlug(blogData.title);
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await updateDoc(docRef, {
    ...blogData,
    slug,
    updatedAt: serverTimestamp(),
  });
};

// Delete blog post
export const deleteBlog = async (id) => {
  await deleteDoc(doc(db, BLOGS_COLLECTION, id));
};

// Get all published blogs (for public listing)
export const getPublishedBlogs = async () => {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where("status", "==", "published"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Get all blogs (for admin)
export const getAllBlogs = async () => {
  const q = query(collection(db, BLOGS_COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Get single blog by slug (for public page)
export const getBlogBySlug = async (slug) => {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where("slug", "==", slug),
    where("status", "==", "published")
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const d = snapshot.docs[0];
  return { id: d.id, ...d.data() };
};

// Get single blog by ID (for admin editing)
export const getBlogById = async (id) => {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};
