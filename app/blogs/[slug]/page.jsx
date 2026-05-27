import BlogDetail from "../../../components/blogs/BlogDetail";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}