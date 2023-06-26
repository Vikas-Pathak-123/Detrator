"use client";
import MiniDrawer from "@/components/MiniDrawer";
import "./globals.css";
import { Inter } from "next/font/google";
import UserProfile from "@/components/UserProfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MiniDrawer />
        <UserProfile />
        {children}
      </body>
    </html>
  );
}
