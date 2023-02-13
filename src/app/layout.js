"use client"

import "../styles/globals.css";
import Header from "@/components/header";

import { usePathname } from "next/navigation";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans();
export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={josefin.className}>
      <head />
      <body>
        <div className="container">
          { pathname !== "/" && <Header />}
          {children}
        </div>
      </body>
    </html>
  )
}
