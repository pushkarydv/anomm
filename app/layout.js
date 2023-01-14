import React from "react";
import "../styles/tailwind.css";
import "../styles/custom.css";
// using a custom font
import { Manrope } from "@next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
});
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
