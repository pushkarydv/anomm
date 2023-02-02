import React from "react";
import "../styles/tailwind.css";
import "../styles/custom.css";
// using a custom font
import { Manrope } from "@next/font/google";
import Script from "next/script";
const manrope = Manrope({
  subsets: ["latin"],
  display: "optional",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <title>Anomm</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="./logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Anomm" />
        <meta
          name="description"
          content="Anomm is a free service to deliver anonymous messages directly to your telegram"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Pushkar Yadav" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anomm.pushkaryadav.in" />
        <meta property="og:title" content="Anomm" />
        <meta
          property="og:description"
          content="Anomm is a free service to deliver anonymous messages directly to your telegram"
        />
        <meta
          property="og:image"
          content="https://anomm.pushkaryadav.in/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anomm.pushkaryadav.in" />
        <meta property="twitter:title" content="Anomm" />
        <meta
          property="twitter:description"
          content="Anomm is a free service to deliver anonymous messages directly to your telegram"
        />
        <meta
          property="twitter:image"
          content="https://anomm.pushkaryadav.in/banner.png"
        />
        {/* Google Analytics  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3RVX26GCZQ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3RVX26GCZQ', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
