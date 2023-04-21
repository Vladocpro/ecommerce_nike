import './globals.css'
import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
