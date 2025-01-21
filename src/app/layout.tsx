

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { CartProvider } from "@/components/context/cartcontext";
import { NotificationsProvider } from "@/components/context/NotificationContext";



export const metadata: Metadata = {
  title: "Final Figma Hackathon",
  description: "GIAIC Hackathon of Figma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NotificationsProvider>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </NotificationsProvider>
        </CartProvider>
      </body>
    </html>
  );
}