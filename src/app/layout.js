import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar/Navbar";
import ProvideTheme from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import Footer from "./components/shared/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechStore - Your One-Stop Tech Shop",
  description:
    "Discover the latest tech products at unbeatable prices. Shop now for gadgets, electronics, and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AuthProvider>
          <ProvideTheme>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ProvideTheme>
        </AuthProvider>
      </body>
    </html>
  );
}
