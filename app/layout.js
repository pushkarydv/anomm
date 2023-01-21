import React from "react";
import "../styles/tailwind.css";
import "../styles/custom.css";
// using a custom font
import { Manrope } from "@next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
  display: "optional",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
