export const metadata = {
  title: "Admin - ClickGrows",
};

// Admin pages get their own layout — no Navbar/Footer/TopPanel
export default function AdminLayout({ children }) {
  return <>{children}</>;
}
