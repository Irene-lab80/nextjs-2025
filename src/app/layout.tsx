import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/shared/ui/layout/header/Header";
import Footer from "@/shared/ui/layout/footer/Footer";
import s from "./layout.module.css";
import classNames from "classnames";
import "./styles/globals.css";
import NavigationProgress from "@/shared/ui/NavigationProgressbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TENNIS STORE",
  description: "The coolest tennis store in the galaxy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(geistSans.variable, geistMono.variable)}>
        <NavigationProgress />

        <Header />
        <main className={s.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
