import "./globals.scss";
import Header from "@/Component/Header/Header";
import Navbar from "@/Component/Navbar/Navbar";
import type { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "IMDB Cloner",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning={true}>
      <body>
        <Provider>
          <Header />
          {/* header */}
          <Navbar />
          {/* navbar */}
          {/* Search Box */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
