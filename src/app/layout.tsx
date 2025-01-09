import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";



export const metadata: Metadata = {
  title: "Final Figma Hackathon",
  description: "GIAIC Hackathon of Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFF]`}
      >
        <Topbar/>
        <Navbar/>
        {children}
       <Footer/> 
      </body>
    </html>
  );
}
