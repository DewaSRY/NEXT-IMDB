import Header from "@/Component/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Provider>
          <Header />
          {/* header */}
          {/* navbar */}
          {/* Search Box */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
