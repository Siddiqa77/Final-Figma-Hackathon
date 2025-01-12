import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Script from "next/script";

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
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <Script>
  {`
    window.SnipcartSettings = {
      publicApiKey: 'MDEyMTdkYTAtOTIzOS00NTliLTgyODQtZTEzZTIzYjgyZWM1NjM4NzE3MDExNzk5MzQwODQ2',
      loadStrategy: 'on-user-interaction',
      modalStyle: 'side',
      currency: 'USD', // Add currency if needed
    };

    (function () {
      let isLoaded = false;
      const loadSnipcart = () => {
        if (isLoaded) return;
        isLoaded = true;

        const head = document.getElementsByTagName('head')[0];

        // Create and append Snipcart div if not exists
        if (!document.querySelector('#snipcart')) {
          const snipcartDiv = document.createElement('div');
          snipcartDiv.id = 'snipcart';
          snipcartDiv.setAttribute('hidden', 'true');
          document.body.appendChild(snipcartDiv);
        }

        // Add Snipcart JavaScript
        if (!document.querySelector('script[src*="snipcart.js"]')) {
          const snipcartScript = document.createElement('script');
          snipcartScript.src = \`https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.js\`;
          snipcartScript.async = true;
          head.appendChild(snipcartScript);
        }

        // Add Snipcart CSS
        if (!document.querySelector('link[href*="snipcart.css"]')) {
          const snipcartCSS = document.createElement('link');
          snipcartCSS.rel = 'stylesheet';
          snipcartCSS.href = \`https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.css\`;
          head.appendChild(snipcartCSS);
        }
      };

      const events = ['focus', 'mouseover', 'touchmove', 'scroll', 'keydown'];
      events.forEach(event => document.addEventListener(event, loadSnipcart));
      setTimeout(loadSnipcart, 2750);
    })();
  `}
</Script>
      </body>
    </html>
  );
}
