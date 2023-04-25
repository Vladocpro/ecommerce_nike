import './globals.css'
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Providers from "./components/Provider";
import AuthPopup from "./components/AuthPopup";

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
      <Providers>
      <Header/>
         <main className="flex-grow w-100%">{children}</main>
         <AuthPopup/>
         <Footer/>
         </Providers>
      </body>
    </html>
  )
}
