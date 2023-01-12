import React from "react";
import "../styles/tailwind.css";
import "../styles/custom.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
