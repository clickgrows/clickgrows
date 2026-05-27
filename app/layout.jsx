import "../styles/globals.scss";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import TopPanel from "../components/top-panel/TopPanel";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "ClickGrows - Digital Growth Agency",
  description:
    "Paid Media & Social Media Marketing Experts Focused on Scaling Modern Brands",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
            <TopPanel />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
