import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/app/components/Provider";

export const metadata: Metadata = {
  title: "Giorgio Savron Development",
  description:
    "Welcome to Giorgio Savron's Developer Portfolio, especializing in React, Next.js",
  keywords:
    "developer, development, software engineer, software developer, miami, miami beach, south beach, react, react.js, next.js, cloud, node, javascript",
  robots: "index, follow",
  alternates: {
    canonical: "https://giorgiosavron.com",
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      url: "/logo192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/logo512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      rel: "msapplication-square150x150logo",
      url: "/mstile-150x150.png",
      type: "image/png",
    },
  ],
  category: "Software Development",
  appleWebApp: {
    capable: true,
    title: "Giorgio Savron Development",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-primary bg-primary">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
